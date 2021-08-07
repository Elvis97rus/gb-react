import {Component} from "react"
import "./app.css"
import styles from "./app.module.css"

export class App extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {counter : 0}
        this.id = null

        // this.handClick = this.handClick.bind(this)
    }

    // state = { counter: 0,}

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps',props, state)
        return state
    }

    handClick = () => {
        console.log('click')
        this.setState( (state) =>({
            counter: state.counter + 1,
        }),
    () => console.log('updated', this.state)
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        // запросы
        // подписки
        // таймеры
        // работа с дом
        // работа с рефами
        // вызов setState

        this.id = setInterval(()=>{
            this.handClick()
        },500)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('componentDidMount', nextState, this.state)

        // if (nextState.counter <= 10){
        //     return true
        // }
        // return false
        return true
    }

    componentWillUnmount() {
        //отписка
        //очистка таймеров
        //очистка эффектов
        console.log('componentWillUnmount')
        clearInterval(this.id)
    }

    render() {
        const { counter } = this.state
        console.log('render', this)

        return (
            <div className={styles.app} key={1}>
                <header>
                    <h1>counter: {counter}</h1>
                    <button onClick={this.handClick}>update</button>
                    <button onClick={this.props.toggle}>toggleApp</button>
                </header>
            </div>
        )
    }
}