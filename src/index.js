import './styles/main.scss'
import './scripts/bootstrap.bundle.min.js'
import Person from './scripts/Person'
import ExampleReactComponent from './scripts/ExampleReactComponent'
import React from 'react'
import ReactDOM from 'react-dom'

const person1 = new Person("Kean Duque")
ReactDOM.render(<ExampleReactComponent />, document.querySelector("#render-react-example-here"))