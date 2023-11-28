import { useContext } from 'react';
import { NavMenuContext } from '../../context/NavMenuContext';

import { LogoIcon } from '../icons/icons.styles';
import { Button, ButtonTypeClasses } from '../button/Button';

import {
	NavHeader,
	LogoContainer,
	NavBar,
	NavMenu,
	NavItem,
	NavLink,
	Hamburger,
	HamburgerBar
} from './navigation.styles';

const Navigation = () => {
	const { isNavOpen, toggleNavMenu, visible } = useContext(NavMenuContext);

	return (
		<NavHeader visible={visible}>
			<NavBar>
				<LogoContainer href='/'>
					<LogoIcon />
				</LogoContainer>
				<NavMenu isNavOpen={isNavOpen}>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-about'>About</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-skills'>Skills</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-journey'>Experience</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-portfolio'>Portfolio</NavLink>
					</NavItem>
					<NavItem onClick={toggleNavMenu}>
						<NavLink href='/#section-contact'>Contact</NavLink>
					</NavItem>

					<Button
						buttonType={ButtonTypeClasses.base}
						href='https://drive.usercontent.google.com/download?id=1OXMpje1_6RWfb4gpHZKgKpLqHDhht-cT&export=download&authuser=0&confirm=t&uuid=132baf20-14f5-408d-ac0d-1c87ec547256&at=APZUnTUKlazCCo8lh_C-k3LbzaO-:1701130302030'
						target='_blank'
						rel='noopener noreferrer'
						download
					>
						Resume
					</Button>
				</NavMenu>

				<Hamburger isNavOpen={isNavOpen} onClick={toggleNavMenu}>
					<HamburgerBar />
				</Hamburger>
			</NavBar>
		</NavHeader>
	);
};

export default Navigation;
