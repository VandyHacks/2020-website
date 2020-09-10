import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'

export default class ScrollableContainer extends PureComponent {
    constructor() {
        super()

        this.state = {
            items: [...Array(10).keys()],
            hasOverflow: false,
            canScrollLeft: false,
            canScrollRight: false
        }

        this.handleClickAddItem = this.handleClickAddItem.bind(this)
        this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)

        this.checkForOverflow = this.checkForOverflow.bind(this)
        this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

        this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
        this.debounceCheckForScrollPosition = debounce(
            this.checkForScrollPosition,
            200
        )

        this.container = null
    }

    componentDidMount() {
        this.checkForOverflow()
        this.checkForScrollPosition()

        this.container.addEventListener(
            'scroll',
            this.debounceCheckForScrollPosition
        )
    }

    componentWillUnmount() {
        this.container.removeEventListener(
            'scroll',
            this.debounceCheckForScrollPosition
        )
        this.debounceCheckForOverflow.cancel()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            this.checkForOverflow()
            this.checkForScrollPosition()
        }
    }

    checkForScrollPosition() {
        const { scrollLeft, scrollWidth, clientWidth } = this.container

        this.setState({
            canScrollLeft: scrollLeft > 0,
            canScrollRight: scrollLeft !== scrollWidth - clientWidth
        })
    }

    checkForOverflow() {
        const { scrollWidth, clientWidth } = this.container
        const hasOverflow = scrollWidth > clientWidth

        this.setState({ hasOverflow })
    }

    handleClickAddItem() {
        this.setState(state => {
            return {
                items: [...state.items, state.items.length]
            }
        })
    }

    handleClickRemoveItem() {
        this.setState(state => {
            return {
                items: state.items.slice(0, -1)
            }
        })
    }

    scrollContainerBy(distance) {
        this.container.scrollBy({ left: distance, behavior: 'smooth' })
    }

    buildItems() {
        return this.state.items.map(item => {
            return (
                <li className="item" key={item}>
                    {item + 1}
                </li>
            )
        })
    }

    buildControls() {
        const { canScrollLeft, canScrollRight } = this.state
        return (
            <div className="item-controls">
                <button
                    type="button"
                    disabled={!canScrollLeft}
                    onClick={() => {
                        this.scrollContainerBy(-200)
                    }}
                >
                    Previous
        </button>

                <button type="button" onClick={this.handleClickAddItem}>
                    Add Item
        </button>

                <button type="button" onClick={this.handleClickRemoveItem}>
                    Remove Item
        </button>

                <button
                    type="button"
                    disabled={!canScrollRight}
                    onClick={() => {
                        this.scrollContainerBy(200)
                    }}
                >
                    Next
        </button>
            </div>
        )
    }

    render() {
        return (
            <>
                <ul
                    className="item-container"
                    ref={node => {
                        this.container = node
                    }}
                >
                    {this.buildItems()}
                </ul>
                {this.buildControls()}
            </>
        )
    }
}
