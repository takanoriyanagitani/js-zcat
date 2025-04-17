/**
 * @template T
 * @typedef {function(): Promise<T>} IO<T>
 */

/**
 * Gets gzip compressed stream and writes gunzipped stream.
 * @returns {Promise<Void>}
 */
function stdin2gzip2stdout() {
  return Promise.resolve()
    .then((_) => {
      /** @type DecompressionStream */
      const dec = new DecompressionStream("gzip")

      /** @type ReadableStream<Uint8Array> */
      const input = Deno.stdin.readable

      /** @type ReadableStream<Uint8Array> */
      const decoded = input.pipeThrough(dec)

      return decoded.pipeTo(Deno.stdout.writable)
    })
}

/** @type IO<Void> */
function main() {
  return Promise.resolve()
    .then(stdin2gzip2stdout)
}

main()
  .catch(console.error)
