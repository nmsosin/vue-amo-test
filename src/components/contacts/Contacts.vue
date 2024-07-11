<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { PhoneOutlined } from '@ant-design/icons-vue';
import { MailOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  name: String,
  email: String,
  phone: String,
})
</script>

<template>
  <a-avatar :size="24" :style="{ verticalAlign: 'middle', marginRight: '8px' }">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  {{ props.name }}
  <a :href="`tel:${phone}`" style="margin-right: 8px;">
    <PhoneOutlined />
  </a>
  <a :href="`mailto:${email}`" style="margin-right: 8px;">
    <MailOutlined />
  </a>
</template>
