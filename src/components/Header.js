import React from 'react'
import { Link, Route } from 'react-router'
import NavLink from './NavLink'

const Header = () => {
	return (
		<nav className="nav">
			<div className="nav__container">
				<div className="nav__list-container">
					<ul className="nav__list">
						<li>
							<NavLink to="/" className="WaiterLink" activeClassName="active">
								<div className="nav__waiter" />
								Drykkir
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/kitchen"
								className="KitchenLink"
								activeClassName="active"
							>
								<div className="nav__kitchen" />
								Matur
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/table"
								className="TableLink"
								activeClassName="active"
							>
								<div className="nav__table" />
								Borð
							</NavLink>
						</li>
						<li>
							<NavLink to="/done" className="DoneLink" activeClassName="active">
								<div className="nav__done" />
								Afgreitt
							</NavLink>
						</li>
					</ul>
				</div>

			</div>
		</nav>
	)
}
export default Header
