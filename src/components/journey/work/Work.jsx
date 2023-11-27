import {
	JourneyDataContainer,
	JourneyData,
	JourneyCalendar,
	JourneyDivider,
	JourneyRounder,
	JourneyLine
} from '../journey.styles';

import { CalendarIcon } from '../../icons/icons.styles';

const Work = () => {
	return (
		<JourneyDataContainer>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div>
					<h5>Electronic Engineer Intern</h5>
					<span>@Ghana Civil Aviation Authority</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>Oct - Dec 2022 </span>
					</JourneyCalendar>
				</div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
					<JourneyLine></JourneyLine>
				</JourneyDivider>
			</JourneyData>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div></div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
				</JourneyDivider>
				<div>
					<h5>Maintenance Director and Head of Operational Assets</h5>
					<span>@FalconSight Aerial Solutions</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2022 - Present </span>
					</JourneyCalendar>
				</div>
			</JourneyData>

			
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div>
					<h5>Digital Marketing and Web Developer </h5>
					<span>@K-lewele Ghana</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2023 - Present </span>
					</JourneyCalendar>
				</div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
					<JourneyLine></JourneyLine>
					<JourneyRounder></JourneyRounder>
				</JourneyDivider>
			</JourneyData>
		</JourneyDataContainer>
	);
};

export default Work;
