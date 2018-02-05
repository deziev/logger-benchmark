pipeline {
  agent any
  parameters {
    string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
    booleanParam(name: 'DEBUG_BUILD', defaultValue: true, description: '')
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install --pure-lockfile --force'
      }
    }
    stage('Test') {
      steps {
        sh '''pwd
ls -la'''
      }
    }
    stage('Deploy') {
      steps {
        sh 'pwd'
      }
    }
  }
}
