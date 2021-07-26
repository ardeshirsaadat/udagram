# Pipeline Process

CI/CD is setup and connected with Circleci

## Order of commands

1. The pipeline uses orbs to install Node, the AWS cli and the EB cli.
2. It checks out the code from the repo
3. FrontEnd & BackEnd install
4. FrontEnd & BackEnd build
5. FrontEnd & BackEnd deploy