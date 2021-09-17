import ElementsBase from './ElementsBase';
import { sampleData1 } from './utils';

function setup() {
	const props = {
		list: []
	};

	return shallow(<ElementsBase {...props} />);
}

const wrapper = setup();

describe('the rendered <ElementsBase />', () => {
	it('do not render any elements', () => {
		console.log(wrapper.find('.old-element').length);
		expect(wrapper.find('.old-element').length).toBe(0);
	});

	it('renders list of elements', () => {
		wrapper.setProps({ list: sampleData1 });
		console.log(wrapper.find('.old-element').length);
		expect(wrapper.find('.old-element').length).toBe(2);
	});
});
