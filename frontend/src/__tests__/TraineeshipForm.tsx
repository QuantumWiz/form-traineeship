import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TraineeshipForm from '../components/TraineeshipForm';
configure({ adapter: new Adapter() });

describe('TraineeshipForm', () => {
    it('should contain submit button', () => {
        expect(shallow(<TraineeshipForm />).contains(<input type="submit" value="Submit" />)).toBe(true);
    });
})
