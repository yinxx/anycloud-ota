var group__group__ota__typedefs =
[
    [ "CY_OTA_INTERVAL_SECS_MIN", "group__group__ota__typedefs.html#ga8dc51fb658999531cfe4ab9b9f554acd", null ],
    [ "CY_OTA_INTERVAL_SECS_MAX", "group__group__ota__typedefs.html#gadf3e83f72f338308efd080da234a6917", null ],
    [ "CY_OTA_INITIAL_CHECK_SECS", "group__group__ota__typedefs.html#gab585a7541d7bb222fbff7719555f68b0", null ],
    [ "CY_OTA_NEXT_CHECK_INTERVAL_SECS", "group__group__ota__typedefs.html#ga9c17fd8b3a98ec9f3f21ba475418227a", null ],
    [ "CY_OTA_RETRY_INTERVAL_SECS", "group__group__ota__typedefs.html#ga5f7048d0e07022decfaa5cd9afcfa2d1", null ],
    [ "CY_OTA_PACKET_INTERVAL_SECS", "group__group__ota__typedefs.html#ga28238863ca54b663f9faea4823253a42", null ],
    [ "CY_OTA_CHECK_TIME_SECS", "group__group__ota__typedefs.html#ga857fb18dbbc8e462f9eefa30d57afefb", null ],
    [ "CY_OTA_RETRIES", "group__group__ota__typedefs.html#gad937d8f959bccec87b87f11a9315ae3a", null ],
    [ "CY_OTA_CONNECT_RETRIES", "group__group__ota__typedefs.html#gaf05c3cff9a4bcdf5d63e5f5d0962f25a", null ],
    [ "CY_OTA_MAX_DOWNLOAD_TRIES", "group__group__ota__typedefs.html#ga63713f2122581c2bee97ebd3dbf1815c", null ],
    [ "CY_OTA_MQTT_MAX_TOPICS", "group__group__ota__typedefs.html#ga3b4d0aa969fb1ec3adefbaec643f78d2", null ],
    [ "IOT_MQTT_TOPIC_PREFIX", "group__group__ota__typedefs.html#gac637b3dbbd15ccf81b2bd3364a55891b", null ],
    [ "CLIENT_IDENTIFIER_PREFIX", "group__group__ota__typedefs.html#gad5f0306468afaca889fce35a2b5b5b95", null ],
    [ "MQTT_KEEP_ALIVE_SECONDS", "group__group__ota__typedefs.html#ga01fb67e929707fa52c28b239980eff0f", null ],
    [ "MQTT_TIMEOUT_MS", "group__group__ota__typedefs.html#gabfcc7e625e42a553de9c3132faef282b", null ],
    [ "cy_ota_context_ptr", "group__group__ota__typedefs.html#ga50b8b1ec191a1d5f9a8fcd3472811694", null ],
    [ "cy_ota_transport_t", "group__group__ota__typedefs.html#ga31d8af0870c63149fb34f51dfd6f9d1a", [
      [ "CY_OTA_TRANSPORT_MQTT", "group__group__ota__typedefs.html#gga31d8af0870c63149fb34f51dfd6f9d1aa1a4d4fbd02c4619f06fbe430e2a41b46", null ]
    ] ],
    [ "cy_ota_mqtt_session_type_t", "group__group__ota__typedefs.html#ga6424608a6e19ecd99e52f4013354fa82", [
      [ "CY_OTA_MQTT_SESSION_CLEAN", "group__group__ota__typedefs.html#gga6424608a6e19ecd99e52f4013354fa82a63a3e6f75f26a0026b89674544f8c162", null ],
      [ "CY_OTA_MQTT_SESSION_RESTART", "group__group__ota__typedefs.html#gga6424608a6e19ecd99e52f4013354fa82a4c63654c806aac390a44fa5708f9838a", null ]
    ] ],
    [ "cy_ota_cb_reason_t", "group__group__ota__typedefs.html#gad852fa8cdb0431df709ccf12bb37cd60", [
      [ "CY_OTA_REASON_AGENT_STARTED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a60698bfdf2dc5820b7d1f30c33888f40", null ],
      [ "CY_OTA_REASON_EXCEEDED_RETRIES", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a948e6721d765cc71d0bb93f42d38ab28", null ],
      [ "CY_OTA_REASON_SERVER_CONNECT_FAILED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a5b3769f24886dce9e8bd6606db55c4f9", null ],
      [ "CY_OTA_REASON_DOWNLOAD_FAILED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a35d9eafd399d202dd826b16865e7996f", null ],
      [ "CY_OTA_REASON_SERVER_DROPPED_US", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a7ecc8b4dee2fec46b037cd6b41b5aec2", null ],
      [ "CY_OTA_REASON_OTA_FLASH_WRITE_ERROR", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60aba0bf8b04bf8ee483b144446e7d066aa", null ],
      [ "CY_OTA_REASON_OTA_VERIFY_FAILED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60acaa7e4efe741743717a3d83182391520", null ],
      [ "CY_OTA_REASON_OTA_INVALID_VERSION", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60ab8756eae0ac1b533c36b4ab274a3ca90", null ],
      [ "CY_OTA_REASON_CONNECTING", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a71a1336b87e0c668b3601da7e1e6f0c3", null ],
      [ "CY_OTA_REASON_CONENCTED_TO_SERVER", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60ace8e36912ffe8502cd3bc1b47405dd23", null ],
      [ "CY_OTA_REASON_DOWNLOAD_STARTED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a01b49dcdeb7717a97fe0000e2a608422", null ],
      [ "CY_OTA_REASON_DOWNLOAD_PERCENT", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a98c083671006fa1635188673a648ca52", null ],
      [ "CY_OTA_REASON_DOWNLOAD_COMPLETED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a866e0c79d7b8e601afed4da1c554bc86", null ],
      [ "CY_OTA_REASON_DISCONNECTED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a9b4af7fcecb3d31fcbaa92dc8fa5408b", null ],
      [ "CY_OTA_REASON_OTA_VERIFIED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60ae919cc7159f1c868460453af1fee9e2b", null ],
      [ "CY_OTA_REASON_OTA_COMPLETED", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60af9344cf699c09b04acbe4c09836e164d", null ],
      [ "CY_OTA_REASON_NO_UPDATE", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60ab9120f1f81b2113c54ed66a09e7707b0", null ],
      [ "CY_OTA_LAST_REASON", "group__group__ota__typedefs.html#ggad852fa8cdb0431df709ccf12bb37cd60a6f1fe12d222a4fcb6aef59d045cc40af", null ]
    ] ],
    [ "cy_ota_agent_state_t", "group__group__ota__typedefs.html#gab1539ebc23219f1ca64318286e9d375f", [
      [ "CY_OTA_STATE_NOT_INITIALIZED", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fae28d1cd8c5a985bb343a0828c234fdd0", null ],
      [ "CY_OTA_STATE_EXITING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fab4dff9b84c5eafa48e4d3eaff2302ba5", null ],
      [ "CY_OTA_STATE_INITIALIZING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fa4980922c9b3cf3c4e1269324d4563d78", null ],
      [ "CY_OTA_STATE_AGENT_WAITING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375faf2dbf8dcfb8d9329549fa539970d9e54", null ],
      [ "CY_OTA_STATE_CONNECTING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fae79b3527056478509dbbbede0b1290b3", null ],
      [ "CY_OTA_STATE_DOWNLOADING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fadbdb7e0d656df104f844e5cfb485535a", null ],
      [ "CY_OTA_STATE_DONWLOAD_COMPLETE", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fa6bf4832d1d663bf8d97fc58dfa83cc14", null ],
      [ "CY_OTA_STATE_DISCONNECTING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fa5b91b6086651f9a454f12fb5e504cec6", null ],
      [ "CY_OTA_STATE_VERIFYING", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fa7e0138f5157a49d069288bcd0cd605c8", null ],
      [ "CY_OTA_LAST_STATE", "group__group__ota__typedefs.html#ggab1539ebc23219f1ca64318286e9d375fa2f46829c6ff9798d1afa8b69173ffd4e", null ]
    ] ],
    [ "cy_ota_error_t", "group__group__ota__typedefs.html#ga4ee62ce2e7209c650cd20166490956df", [
      [ "OTA_ERROR_CONNECTING", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfaf6737e125ad0b6f8fbe248b64b664d5c", null ],
      [ "OTA_ERROR_DOWNLOADING", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa1238ba099ef73d75b4563a034f46ea90", null ],
      [ "OTA_ERROR_NO_UPDATE", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa44e9163f8ed70bf2579fef181af989e8", null ],
      [ "OTA_ERROR_WRITING_TO_FLASH", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa24c0839aa72df5bcb2d9a6eb08fb26f1", null ],
      [ "OTA_ERROR_VERIFY_FAILED", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa41ed567ef3dfb1fa77a5316faffd61c6", null ],
      [ "OTA_ERROR_INVALID_VERSION", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa5548023db6fba41f2587efc206adc4c3", null ],
      [ "OTA_ERROR_SERVER_DROPPED", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfac9a4b516bf2e8108619b29c152f7fd23", null ],
      [ "OTA_ERROR_SUBSCRIBING", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfa67fe1cbc59052343bddeb08b53654b11", null ],
      [ "CY_OTA_LAST_ERROR", "group__group__ota__typedefs.html#gga4ee62ce2e7209c650cd20166490956dfae98a5c5260db049210daaea046950690", null ]
    ] ]
];