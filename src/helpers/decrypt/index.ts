import AWS from 'aws-sdk'

async function decrypt(encrypted: string) {
  const kms = new AWS.KMS()
  const req = {
    CiphertextBlob: Buffer.from(encrypted, 'base64'),
    EncryptionContext: {LambdaFunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME},
  }
  const data = await kms.decrypt(req).promise()
  return data.Plaintext.toString('ascii')
}

export {decrypt}
