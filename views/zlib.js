const zlib = require('zlib');

const inputString = 'Hello, chow!';
zlib.gzip(inputString, (error, compressedData) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('Compressed data:', compressedData);
});

const compressedData  = Buffer.from('1f8b080000000000000af348cdc9c9d75148cec82f5704009fee53540c000000','hex')
zlib.gunzip(compressedData, (error, compressedData) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Decompressed data:', compressedData.toString());
  });