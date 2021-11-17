import {shallow} from "enzyme";
import GifItem from "../../components/GifItem";

describe('Tests in <GifItem/>', () => {
    test('should show the component successfully', () => {

        const url = 'https://example.com';
        const title = 'example';

        const wrapper = shallow(<GifItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    })
})