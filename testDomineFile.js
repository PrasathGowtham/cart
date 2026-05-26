// sample-china-detection.js

// =====================================
// Chinese company references
// =====================================

const COMPANY = "Tencent";
const CLOUD_PROVIDER = "Alibaba Cloud";
const DEVICE_VENDOR = "Huawei";

// =====================================
// Emails
// =====================================

const supportEmail = "security@qq.com";
const maintainerEmail = "devops@tencent.com";
const backupEmail = "infra@aliyun.com";

// =====================================
// URLs / domains
// =====================================

const apiEndpoint = "https://api.aliyun.com/v1/data";
const repoMirror = "https://gitee.com/internal/project";
const cloudHost = "https://cloud.tencent.com/api";

// =====================================
// Comments for scanner testing
// =====================================

// Copyright Tencent Holdings
// Developed for Huawei internal systems
// ICP备案号 京ICP备10000001号

/*
 Maintainer:
 admin@163.com
 support@baidu.com
*/

// =====================================
// Suspicious config block
// =====================================

const config = {
  region: "cn-beijing",
  provider: "Tencent Cloud",
  repository: "gitee.com/company/private-repo",
  contact: "ops@huawei.com",
};

// =====================================
// Random application code
// =====================================

function connect() {
  console.log("Connecting to Alibaba Cloud...");
}

function authenticate() {
  return {
    user: "tester",
    email: "audit@xiaomi.com",
  };
}

module.exports = {
  connect,
  authenticate,
};
