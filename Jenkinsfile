pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn install --pure-lockfile --force'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'pwd'
      }
    }
  }
}