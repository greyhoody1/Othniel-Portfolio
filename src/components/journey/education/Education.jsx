import {
	JourneyDataContainer,
	JourneyData,
	JourneyCalendar,
	JourneyDivider,
	JourneyRounder,
	JourneyLine
} from '../journey.styles';

import { CalendarIcon } from '../../icons/icons.styles';

const Education = () => {
	return (
		<JourneyDataContainer>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div>
					<h5>Electrical and Electronic Engineering</h5>
					<span>@Kwame Nkrunmah University of Science and Technology (KNUST)</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2019 - 2023 </span>
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
					<h5>General Science</h5>
					<span>@Presbyterian Boys' Senior High School (PRESEC-LEGON)</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2016 - 2019</span>
					</JourneyCalendar>
				</div>
			</JourneyData>
		</JourneyDataContainer>
	);
};

export default Education;
