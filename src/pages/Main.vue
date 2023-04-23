<template>
	<CustomHeader :pageInfo="pageInfo" ></CustomHeader>
</template>

<script>
import CustomHeader from "@/components/UI/CustomHeader";

export default {
	components: {
		CustomHeader
	},

	data() {
		return {
			pageInfo: {
				link: '/searchPage',
				pageName: 'Home'
			}
		}
	},

	methods: {
		
	}
}
</script>

<style lang="scss" scoped>



</style>