<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import Contacts from '../contacts';
import { dataSource } from '../../shared/mockData';
import { toTableData } from '../../shared/helpers';
import { columns } from './config';

const value = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);

  // clear input value after use
  value.value = '';
};

</script>

<template>

  <a-card title="Сделки и контракты" style="margin: 0 auto; max-width: 1560px;">
    <template #extra>
      <a-input-search
        v-model:value="value"
        placeholder="Найти..."
        style="width: 200px"
        @search="onSearch"
      />
    </template>
    <a-table :dataSource="toTableData(dataSource)" :columns="columns" :expand-column-width="100">
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          <Contacts
            v-if="record.contacts"
            :name="record.contacts.name"
            :phone="record.contacts.phone"
            :email="record.contacts.email"
          />
          <p v-else>Без контакта</p>
        </p>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'bailee'">
          <a-avatar :size="24" :style="{ backgroundColor: 'rgb(24, 144, 255)', verticalAlign: 'middle', marginRight: '8px' }">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          {{ record.bailee }}
        </template>
        <template v-else-if="column.key === 'statusName'">
          <span>
            <a-tag
              :color="record.tagColor"
              style="color: rgb(102, 102, 102);"
            >
              {{ record.statusName }}
            </a-tag>
          </span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<style>
  .ant-card .ant-card-head-title {
    flex: unset;
  }
</style>