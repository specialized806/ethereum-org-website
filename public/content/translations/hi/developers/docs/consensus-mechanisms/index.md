---
title: आम सहमति तंत्र
description: वितरित प्रणालियों में सर्वसम्मति प्रोटोकॉल की व्याख्या और एथेरियम में उनकी भूमिका।
lang: hi
---

'आम सहमति तंत्र' शब्द का उपयोग अक्सर बोलचाल की भाषा में 'हिस्सेदारी का सबूत', 'काम का सबूत' या 'प्राधिकार-का-सबूत' प्रोटोकॉल को संदर्भित करने के लिए किया जाता है। हालांकि, ये आम सहमति तंत्र में केवल घटक हैं, जो [सिबिल हमलों](/glossary/#sybil-attack) से बचाते हैं। सर्वसम्मति तंत्र विचारों, प्रोटोकॉल और प्रोत्साहनों का पूरा ढेर है जो एक ब्लॉकचेन की स्थिति पर सहमत होने के लिए नोड्स के वितरित सेट को सक्षम बनाता है।

## आवश्यक शर्तें {#prerequisites}

इस पेज को बेहतर ढंग से समझने के लिए, हम अनुशंसा करते हैं कि आप पहले हमारे [एथेरियम का परिचय](/developers/docs/intro-to-ethereum/) पढ़ें।

## सर्वसम्मति क्या है? {#what-is-consensus}

आम सहमति से हमारा मतलब है कि एक सामान्य समझौता हो गया है। सिनेमा देखने जाने वाले लोगों के एक समूह पर विचार करें। यदि फिल्म की प्रस्तावित पसंद पर कोई असहमति नहीं है, तो एक आम सहमति हासिल की जाती है। यदि असहमति है, तो समूह के पास यह तय करने का साधन होना चाहिए कि कौन सी फिल्म देखनी है। चरम मामलों में, समूह अंततः विभाजित हो जाएगा।

एथेरियम ब्लॉकचेन के संबंध में, प्रक्रिया को औपचारिक रूप दिया गया है, और आम सहमति तक पहुंचने का मतलब है कि नेटवर्क पर कम से कम 66% नोड्स नेटवर्क की वैश्विक स्थिति पर सहमत हैं।

## आम सहमति तंत्र क्या है? {#what-is-a-consensus-mechanism}

आम सहमति तंत्र शब्द प्रोटोकॉल, प्रोत्साहन और विचारों के पूरे ढेर को संदर्भित करता है जो नोड्स के नेटवर्क को ब्लॉकचेन की स्थिति पर सहमत होने की अनुमति देता है।

एथेरियम एक 'हिस्सेदारी का सबूत'-आधारित आम सहमति तंत्र का उपयोग करता है जो स्टेकर्स द्वारा लॉक की गई पूंजी पर लागू पुरस्कारों और दंड के एक सेट से अपनी क्रिप्टो-आर्थिक सुरक्षा प्राप्त करता है। यह प्रोत्साहन संरचना व्यक्तिगत हितधारकों को ईमानदार सत्यापनकर्ताओं को संचालित करने के लिए प्रोत्साहित करती है, जो नहीं करते हैं उन्हें दंडित करती है, और नेटवर्क पर हमला करने के लिए अत्यधिक उच्च लागत पैदा करती है।

फिर, एक प्रोटोकॉल है जो नियंत्रित करता है कि ब्लॉक का प्रस्ताव या मान्य करने, लेनदेन की प्रक्रिया करने और श्रृंखला के प्रमुख के बारे में उनके विचार के लिए वोट करने के लिए ईमानदार सत्यापनकर्ताओं का चयन कैसे किया जाता है। दुर्लभ स्थितियों में जहां चेन के शीर्ष के पास कई ब्लॉक एक ही स्थिति में होते हैं, एक कांटा-विकल्प तंत्र होता है जो उन ब्लॉकों का चयन करता है जो 'सबसे भारी' चेन बनाते हैं, जो ऐसे सत्यापनकर्ताओं की संख्या से मापा जाता है जिन्होंने ऐसे ब्लॉक के लिए वोट किया था जिनके भार का मापन उनके द्वारा हिस्सा लिए गए ईथर बैलेंस के आधार पर किया जाता है।

कुछ अवधारणाएं आम सहमति के लिए महत्वपूर्ण हैं जिन्हें कोड में स्पष्ट रूप से परिभाषित नहीं किया गया है, जैसे कि नेटवर्क पर हमलों के खिलाफ रक्षा की अंतिम पंक्ति के रूप में संभावित आउट-ऑफ-बैंड सोशल कोऑर्डनैशन द्वारा दी जाने वाली अतिरिक्त सुरक्षा।

ये घटक मिलकर आम सहमति तंत्र बनाते हैं।

## सर्वसम्मति तंत्र के प्रकार {#types-of-consensus-mechanisms}

### काम का सबूत आधारित {#proof-of-work}

बिटकॉइन की तरह, एथेरियम ने एक बार **काम का सबूत (PoW)** आधारित आम सहमति प्रोटोकॉल का उपयोग किया था।

#### ब्लॉक निर्माण {#pow-block-creation}

माईनर संसाधित लेनदेन से भरे नए ब्लॉक बनाने के लिए प्रतिस्पर्धा करते हैं। विजेता बाकी नेटवर्क के साथ नए ब्लॉक को साझा करता है और कुछ ताजा माईनिंग ETH अर्जित करता है। दौड़ कंप्यूटर द्वारा जीती जाती है जो गणित की पहेली को सबसे तेजी से हल करने में सक्षम है। यह वर्तमान ब्लॉक और पहले गए ब्लॉक के बीच क्रिप्टोग्राफिक लिंक उत्पन्न करता है। इस पहेली को हल करना "काम का सबूत" में काम है। कैनोनिकल चेन तब एक कांटा-विकल्प नियम द्वारा निर्धारित की जाती है जो उन ब्लॉकों के सेट का चयन करती है जिनके पास उन्हें माईन करने के लिए सबसे अधिक काम किया गया है।

#### सुरक्षा {#pow-security}

नेटवर्क को इस तथ्य से सुरक्षित रखा जाता है कि श्रृंखला को धोखा देने के लिए आपको नेटवर्क की 51% कंप्यूटिंग शक्ति की आवश्यकता होगी। इसके लिए उपकरण और ऊर्जा में इतने बड़े निवेश की आवश्यकता होगी; आपको लाभ से अधिक खर्च करने की संभावना है।

[काम का सबूत](/developers/docs/consensus-mechanisms/pow/) के बारे में अधिक जानकारी

### हिस्सेदारी का सबूत आधारित {#proof-of-stake}

एथेरियम अब **हिस्सेदारी का सबूत (PoS)** आधारित आम सहमति प्रोटोकॉल का उपयोग करता है।

#### ब्लॉक निर्माण {#pos-block-creation}

सत्यापनकर्ता ब्लॉक बनाते हैं। ब्लॉक प्रस्तावक होने के लिए प्रत्येक स्लॉट में एक सत्यापनकर्ता को रेंडम रूप से चुना जाता है। उनके सहमति ग्राहक अपने युग्मित निष्पादन ग्राहक से 'निष्पादन पेलोड' के रूप में लेनदेन के एक बंडल का अनुरोध करते हैं। वे इसे एक ब्लॉक बनाने के लिए सर्वसम्मति डेटा में शामिल करते हैं, जिसे वे एथेरियम नेटवर्क पर अन्य नोड्स को भेजते हैं। इस ब्लॉक उत्पादन को ETH में पुरस्कृत किया जाता है। दुर्लभ मामलों में जब एक ही स्लॉट के लिए कई संभावित ब्लॉक मौजूद होते हैं, या नोड्स अलग-अलग समय पर ब्लॉक के बारे में सुनते हैं, तो कांटा विकल्प एल्गोरिथम उस ब्लॉक को चुनता है जो साक्षी के सबसे बड़े वजन के साथ चेन बनाता है (जहां भार उनके ETH बैलेंस द्वारा स्केल किए गए सत्यापनकर्ताओं की संख्या है)।

#### सुरक्षा {#pos-security}

एक हिस्सेदारी का सबूत सिस्टम क्रिप्टो-आर्थिक रूप से सुरक्षित है क्योंकि श्रृंखला पर नियंत्रण करने का प्रयास करने वाले हमलावर को ETH की भारी मात्रा को नष्ट करना होगा। पुरस्कारों की एक प्रणाली व्यक्तिगत हितधारकों को ईमानदारी से व्यवहार करने के लिए प्रोत्साहित करती है, और दंड स्टेकर्स को दुर्भावनापूर्ण रूप से कार्य करने से हतोत्साहित करता है।

[हिस्सेदारी का सबूत](/developers/docs/consensus-mechanisms/pos/) के बारे में अधिक जानकारी

### एक दृश्य गाइड {#types-of-consensus-video}

एथेरियम पर उपयोग किए जाने वाले विभिन्न प्रकार के सर्वसम्मति तंत्रों पर अधिक देखें:

<YouTube id="ojxfbN78WFQ" />

### सिबिल प्रतिरोध और श्रृंखला चयन {#sybil-chain}

'काम का सबूत' और 'हिस्सेदारी का सबूत' अकेले आम सहमति प्रोटोकॉल नहीं हैं, लेकिन उन्हें अक्सर सादगी के लिए इस तरह संदर्भित किया जाता है। वे वास्तव में सिबिल प्रतिरोध तंत्र और ब्लॉक लेखक चयनकर्ता हैं; वे यह तय करने का एक तरीका हैं कि नवीनतम ब्लॉक का लेखक कौन है। एक अन्य महत्वपूर्ण घटक चेन चयन (उर्फ कांटा विकल्प) एल्गोरिथम है जो नोड्स को उन परिदृश्यों में चेन के शीर्ष पर एक एकल सही ब्लॉक चुनने में सक्षम बनाता है जहां एक ही स्थिति में कई ब्लॉक मौजूद हैं।

**सिबिल प्रतिरोध** मापता है कि सिबिल हमले के खिलाफ एक प्रोटोकॉल कैसे किराया करता है। इस प्रकार के हमले का प्रतिरोध एक विकेंद्रीकृत ब्लॉकचेन के लिए आवश्यक है और माईनर्स और सत्यापनकर्ताओं को लगाए गए संसाधनों के आधार पर समान रूप से पुरस्कृत करने में सक्षम बनाता है। काम का सबूत और हिस्सेदारी का सबूत यूज़र को बहुत अधिक ऊर्जा खर्च करके या बहुत अधिक संपार्श्विक लगाकर इससे बचाते हैं। ये सुरक्षा सिबिल हमलों के लिए एक आर्थिक निवारक है।

एक **चेन चयन नियम** का उपयोग यह तय करने के लिए किया जाता है कि कौन सी श्रृंखला "सही" श्रृंखला है। बिटकॉइन "सबसे लंबी श्रृंखला" नियम का उपयोग करता है, जिसका अर्थ है कि जो भी ब्लॉकचेन सबसे लंबा होगा वह बाकी नोड्स वैध के रूप में स्वीकार करेगा और साथ काम करेगा। 'काम का सबूत' चेन के लिए, सबसे लंबी चेन की कुल संचयी 'काम का सबूत' कठिनाई से निर्धारित होती है। एथेरियम सबसे लंबी चेन नियम का भी उपयोग करता था; हालांकि अब, जब एथेरियम 'हिस्सेदारी का सबूत' पर चलता है, तो उसने एक अपडेटेड कांटा-विकल्प एल्गोरिथम को अपनाया जो चेन के 'भार' को मापता है। वजन सत्यापनकर्ता वोटों का संचित योग है, जो सत्यापनकर्ता स्टेक-ईथर बैलेंस द्वारा भारित है।

एथेरियम एक आम सहमति तंत्र का उपयोग करता है जिसे [गैस्पर](/developers/docs/consensus-mechanisms/pos/gasper/) के रूप में जाना जाता है जो [कैस्पर FFG 'हिस्सेदारी का सबूत'](https://arxiv.org/abs/1710.09437) को [GHOST कांटा-विकल्प नियम](https://arxiv.org/abs/2003.03052) के साथ जोड़ता है।

## अग्रिम पठन {#further-reading}

- [ब्लॉकचेन सर्वसम्मति एल्गोरिथम क्या है?](https://academy.binance.com/en/articles/what-is-a-blockchain-consensus-algorithm)
- [नाकामोटो सर्वसम्मति क्या है? शुरुआती गाइड को पूरा करें](https://blockonomi.com/nakamoto-consensus/)
- [कैस्पर कैसे काम करता है?](https://medium.com/unitychain/intro-to-casper-ffg-9ed944d98b2d)
- ['काम का सबूत' ब्लॉकचेन की सुरक्षा और प्रदर्शन पर](https://eprint.iacr.org/2016/555.pdf)
- [बीजान्टिन गलती](https://en.wikipedia.org/wiki/Byzantine_fault)

_एक सामुदायिक संसाधन के बारे में जानें जिसने आपकी मदद की? इस पृष्ठ को संपादित करें और इसे जोड़ें!_

## संबंधित विषय {#related-topics}

- [काम का प्रमाण](/developers/docs/consensus-mechanisms/pow/)
- [माइनिंग](/developers/docs/consensus-mechanisms/pow/mining/)
- [स्टेक-का-प्रमाण](/developers/docs/consensus-mechanisms/pos/)
- [प्रूफ-ऑफ-अथॉरिटी](/developers/docs/consensus-mechanisms/poa/)