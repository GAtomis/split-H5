import { findSysDictionary } from '@/api/sys-dictionary'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDictionaryStore = defineStore('dictionary', () => {
  const dictionaryMap = ref<any>({})

  const setDictionaryMap = (dictionaryRes:any) => {
    dictionaryMap.value = { ...dictionaryMap.value, ...dictionaryRes }
  }

  const getDictionary = async(type:any) => {
    if (dictionaryMap.value[type] && dictionaryMap.value[type].length) {
      return dictionaryMap.value[type]
    } else {
      const res = await findSysDictionary({ type })
      if (res.code === 0) {
        const dictionaryRes = {}
        const dict = []
        res.data.resysDictionary.sysDictionaryDetails && res.data.resysDictionary.sysDictionaryDetails.forEach(item => {
          dict.push({
            label: item.label,
            value: item.value
          })
        })
        dictionaryRes[res.data.resysDictionary.type] = dict
        setDictionaryMap(dictionaryRes)
        return dictionaryMap.value[type]
      }
    }
  }

  return {
    dictionaryMap,
    setDictionaryMap,
    getDictionary
  }
})
