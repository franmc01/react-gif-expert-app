import {shallow} from "enzyme";
import GifItem from "../../components/GifItem";

describe('Tests in <GifItem/>', () => {

    const url = 'https://example.com';
    const title = 'example';
    const wrapper = shallow(<GifItem title={title} url={url}/>);

    test('It should show the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('It should have a header element of type h5 and inside the title that is sent by props.', () => {
        const element = wrapper.find('h5');
        expect(element.text().trim()).toBe(title);
    });

    test('It should show the image with the information sent by props', () => {
        const elementImg = wrapper.find('img');
        // console.log(elementImg.html());
        // console.log(elementImg.props());
        expect(elementImg.prop('src')).toBe(url);
        expect(elementImg.prop('alt')).toBe(title);
    });

    test('The card container should have the class: animate__fadeIn', () => {
        // expect(wrapper.prop('className').includes('animate__fadeIn')).toBe(true);
        expect(wrapper.hasClass('animate__fadeIn')).toBeTruthy();
    });

})