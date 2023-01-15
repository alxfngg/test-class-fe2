// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CoursesReducer from './coursesReducer';
import ExploreReducer from './exploreReducer';
import SearchReducer from './searchReducer';
import ProfessorsReducer from './professorsReducer';
import WaitlistReducer from './waitlistReducer';
import DepartmentsReducer from './departmentsReducer';
import ReviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  courses: CoursesReducer,
  professors: ProfessorsReducer,
  explore: ExploreReducer,
  search: SearchReducer,
  waitlist: WaitlistReducer,
  departments: DepartmentsReducer,
  reviews: ReviewsReducer,
});

export default rootReducer;