<?php
/** Run after Simply Static finishes exporting and after building the simulator. */
$root = dirname(__DIR__) . '/docs';
$app = dirname(__DIR__, 2) . '/mo-phong-on-dinh-tau/dist';
if (!is_file($root . '/index.html') || !is_file($app . '/index.html')) {
    fwrite(STDERR, "Export WordPress and build the simulator first.\n");
    exit(1);
}
$map = [
    '/nang-luc/thiet-ke-tau/' => '/thiet-ke-tau/',
    '/nang-luc/marine-rd/' => '/marine-rd/',
    '/nang-luc/dich-vu-cntt/' => '/dich-vu-cntt/',
    '/en/home/lien-he/' => '/en/contact/',
    '/en/capabilities/ship-design/' => '/en/ship-design/',
];
$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS));
foreach ($files as $file) {
    $extension = strtolower($file->getExtension());
    if (in_array($extension, ['zip', 'php', 'sql', 'env'], true)) {
        throw new RuntimeException('Unexpected non-public file: ' . $file->getPathname());
    }
    if ($extension === 'html') {
        $html = file_get_contents($file->getPathname());
        $html = str_replace(array_keys($map), array_values($map), $html);
        // These discovery links point to WordPress services unavailable on GitHub Pages.
        $html = preg_replace('~<link\b(?=[^>]*(?:application/rss\+xml|application/rsd\+xml))[^>]*>\s*~i', '', $html);
        file_put_contents($file->getPathname(), $html);
    }
    if ($extension === 'xml') {
        $xml = file_get_contents($file->getPathname());
        $xml = preg_replace('~<url>\s*<loc>https://lasanmarine\.com/all-blocks(?:-2)?/</loc>.*?</url>~s', '', $xml);
        file_put_contents($file->getPathname(), $xml);
    }
}
$target = $root . '/cong-cu/mo-phong-on-dinh-tau';
if (!is_dir($target)) mkdir($target, 0755, true);
$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($app, FilesystemIterator::SKIP_DOTS), RecursiveIteratorIterator::SELF_FIRST);
foreach ($files as $file) {
    $destination = $target . substr($file->getPathname(), strlen($app));
    if ($file->isDir()) { if (!is_dir($destination)) mkdir($destination, 0755, true); }
    else { copy($file->getPathname(), $destination); }
}
file_put_contents($root . '/CNAME', "lasanmarine.com\n");
file_put_contents($root . '/.nojekyll', '');
$legacy = $root . '/mo-phong-on-dinh-tau';
if (!is_dir($legacy)) mkdir($legacy, 0755, true);
file_put_contents($legacy . '/index.html', '<!doctype html><html lang="vi"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/cong-cu/mo-phong-on-dinh-tau/"><link rel="canonical" href="https://lasanmarine.com/cong-cu/mo-phong-on-dinh-tau/"><title>Mô phỏng ổn định tàu</title><a href="/cong-cu/mo-phong-on-dinh-tau/">Mở mô phỏng ổn định tàu</a></html>');
echo "Finalized WordPress export and simulator.\n";
