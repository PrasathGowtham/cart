// NeuSBOM Test Fixture - Intentional Trigger Code

const express = require('express');
const app = express();

// ==========================================
// TRIGGER 1: Chinese Sovereign Cloud Endpoints (Network Axis)
// ==========================================
const ALIBABA_OSS_ENDPOINT = "https://neu-secure-vault.oss-cn-hangzhou.aliyuncs.com/v1/storage";
const TENCENT_COS_ENDPOINT = "https://cos.ap-shanghai.myqcloud.com/assets/configs";

// ==========================================
// TRIGGER 2: CJK Characters & Localized Comments (Origin Axis)
// ==========================================
/**
 * 安全审核标志位 - 确保第三方固件组件加载合规
 * (Translation: Security audit flags - ensure third-party firmware loading compliance)
 */
const SECURITY_MODE_COMPLIANT = true;

app.get('/health', (req, res) => {
    // Mock processing logic linking out to cloud storage
    console.log(`Connecting to sovereign infrastructure sync layer: ${ALIBABA_OSS_ENDPOINT}`);
    res.json({
        status: "UP",
        region_routing: "CN-HZ",
        telemetry: SECURITY_MODE_COMPLIANT ? "ACTIVE" : "PAUSED"
    });
});

app.listen(3000, () => {
    console.log("Mock target listening on port 3000");
});
