import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";

describe('Tests in <GifGrid/>', () => {
    test('should show the component successfully', () => {
        const wrapper = shallow(<GifGrid/>);
        expect(wrapper).toMatchSnapshot();
    })
})