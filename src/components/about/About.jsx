import {
	AboutSection,
	AboutContainer,
	AboutText,
	AboutImageContainer,
	Wrapper
} from './about.styles';

import { SectionHeading } from '../main/main.styles';

import aboutImage from '../../assets/about.jpg';

const About = () => {
	return (
		<AboutSection id='section-about'>
			<SectionHeading>
				<h4>About Me</h4>
			</SectionHeading>
			<AboutContainer data-aos='fade-up' data-aos-easing='linear'>
				<AboutText>
					<p>
						Hey there! I'm Othniel, a <span>programmer</span> with a passion
						for all things nerdy. I started writing code way back in{' '}
						<span>2016</span> and and since then, I have been constantly
						learning and growing my skills. I've had my highs and lows like most
						software engineers, but I'm determined to continuously improve and
						succeed.
					</p>
					<p>
						My main focus is on <span>front-end development</span>, where I love
						to create beautiful and interactive user experiences. I am
						proficient in <span>HTML</span>, <span>CSS</span>,{' '}
						<span>JavaScript</span>, <span>C++</span>, <span>Python</span> and <span>React</span>, and have a solid
						understanding of responsive design principles.
					</p>
					<p>
						In my free time, I enjoy watching anime, doodling with electronics, I am a fan of robotics, and love
						experimenting with new technologies. I am always eager to take on
						new challenges and expand my knowledge in the field of electronics, web
						development, system modelling, and automation..
					</p>
				</AboutText>

				<Wrapper>
					<AboutImageContainer>
						<img src={aboutImage} alt='' />
					</AboutImageContainer>
				</Wrapper>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
