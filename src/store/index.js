import { createStore } from 'vuex';
import { currentSearch } from '@/store/currentSearchModule';

export default createStore({
	modules: {
		locationData: currentSearch
	}
});