# Wordle API

This is a simple serverless API designed to generate random words for use in a Wordle clone used in
my Javascript classes. It also does checks against words entered the game to verify they are a valid
word.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Running "serverless" from node_modules

Deploying wordle-api to stage dev (us-east-1)

✔ Service deployed to stack wordle-api-dev (172s)

endpoints:
  GET - https://oxmi6xnm5b.execute-api.us-east-1.amazonaws.com/generate
  GET - https://oxmi6xnm5b.execute-api.us-east-1.amazonaws.com/verify/{word}
functions:
  generate: wordle-api-dev-generate (28 MB)
  verify: wordle-api-dev-verify (28 MB)
```

The API is public and accessible by anyone.

### Invocation

After successful deployment, the API endpoints can be invoked via HTTP:

1) Generate

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/generate?length=5
```

Which should result in response similar to the following:

```json
{
  "word": "roofs"
}
```

1) Verify

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/verify/<word>
```

Which should result in response similar to the following:

```json
{
  "exists":true
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function generate
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"word\": \"roofs\"}"
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin.
In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to 
`plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```
