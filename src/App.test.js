import App from './App';
import ClearCounterButton from './ClearCounterButton';
import ClearLocalStorage from './ClearLocalStorage';
import CounterBase from './CounterBase';
import CounterResult from './CounterResult';
import ElementsAddNew from './ElementsAddNew';
import ElementsBase from './ElementsBase';
import SampleData1Button from './SampleData1Button';
import SampleData2Button from './SampleData2Button';
import SearchForm from './SearchForm';
import SettingsGoalButton from './SettingsGoalButton';
import { sampleData1 } from './utils';

let appWrapper;
let appInstance;
const app = (disableLifecycleMethods = false) => shallow(<App />, { disableLifecycleMethods });

beforeEach(() => {
	appWrapper = app();
	appInstance = appWrapper.instance();
});

afterEach(() => {
	appWrapper = undefined;
	appInstance = undefined;
});

describe('<App />', () => {
	it('renders without crashing', () => {
		expect(app().exists()).toBe(true);
	});

	it('renders a div', () => {
		expect(appWrapper.first().type()).toBe('div');
	});
	it('renders <SearchForm />', () => {
		expect(appWrapper.find(SearchForm).length).toBe(1);
	});
	it('renders <SampleData1Button />', () => {
		expect(appWrapper.find(SampleData1Button).length).toBe(1);
	});
	it('renders <SampleData2Button />', () => {
		expect(appWrapper.find(SampleData2Button).length).toBe(1);
	});
	it('renders <ClearLocalStorage />', () => {
		expect(appWrapper.find(ClearLocalStorage).length).toBe(1);
	});
	it('renders <ElementsBase />', () => {
		expect(appWrapper.find(ElementsBase).length).toBe(1);
	});
	it('renders <ElementsAddNew />', () => {
		expect(appWrapper.find(ElementsAddNew).length).toBe(1);
	});
	it('renders <ClearCounterButton />', () => {
		expect(appWrapper.find(ClearCounterButton).length).toBe(1);
	});
	it('renders <SettingsGoalButton />', () => {
		expect(appWrapper.find(SettingsGoalButton).length).toBe(1);
	});
	it('renders <CounterBase />', () => {
		expect(appWrapper.find(CounterBase).length).toBe(1);
	});
	it('renders <CounterResult />', () => {
		expect(appWrapper.find(CounterResult).length).toBe(1);
	});
});
describe('the rendered <ElementsBase />', () => {
	const elementsBase = () => appWrapper.find(ElementsBase);
	const element = () => appWrapper.find(Element);

	it('receives state.list as a "list" prop', () => {
		expect(elementsBase().prop('list')).toEqual(appWrapper.state('list'));
	});

	it('receives state.counter as a "counter" prop', () => {
		expect(elementsBase().prop('counter')).toEqual(appWrapper.state('counter'));
	});

	it('receives setCounter as "setCounter" prop', () => {
		expect(elementsBase().prop('setCounter')).toEqual(appInstance.setCounter);
	});

	it('receives setToLocalStorage as "setToLocalStorage" prop', () => {
		expect(elementsBase().prop('setToLocalStorage')).toEqual(appInstance.setToLocalStorage);
	});

	it('receives setList as "setList" prop', () => {
		expect(elementsBase().prop('setList')).toEqual(appInstance.setList);
	});
});
