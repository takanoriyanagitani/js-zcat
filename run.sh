#!/bin/sh

echo gunzip using zcat...
ls -l |
	sort |
	gzip --fast |
	zcat |
	shasum -a 256

echo
echo gunzip using deno/zcat.mjs...
ls -l |
	sort |
	gzip --fast |
	deno run zcat.mjs |
	shasum -a 256
