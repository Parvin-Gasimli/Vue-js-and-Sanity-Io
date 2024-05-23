<template>
  <div class="container p-4 bg-slate-100 mx-auto">
    <h1 class="text-center text-2xl font-bold">{{ msg }}</h1>
    <img
      v-if="loading"
      src="https://i.gifer.com/origin/a1/a1bb0cc10512df82afd421a77097cb91_w200.gif"
    />
    <div class="flex items-center justify-start gap-4 flex-wrap" v-else>
      <div
        class="flex flex-col items-stretch max-w-[300px] w-full items-center justify-center border border-gray-200 p-4 m-4 bg-white rounded-lg shadow-md"
        v-for="item in apidata"
        :key="item._id"
      >
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script scope>
import { fetchQuery } from '@/client'
export default {
  data() {
    return {
      loading: true,
      query: `*[_type == 'category']`,
      apidata: []
    }
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  created() {
    this.getApiData()
  },

  methods: {
    async getApiData() {
      this.loading = true
      await fetchQuery(this.query)
        .then((data) => {
          this.apidata = data
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
