// ─────────────────────────────────────────────────────────
//  LEARNING DASHBOARD — Content Data
// ─────────────────────────────────────────────────────────

const DATA = {

  // ══════════════════════════════════════════
  //  ARABIC
  // ══════════════════════════════════════════
  ar: {

    letters: [
      {t:'أ',s:'ألف'},{t:'ب',s:'باء'},{t:'ت',s:'تاء'},{t:'ث',s:'ثاء'},
      {t:'ج',s:'جيم'},{t:'ح',s:'حاء'},{t:'خ',s:'خاء'},{t:'د',s:'دال'},
      {t:'ذ',s:'ذال'},{t:'ر',s:'راء'},{t:'ز',s:'زاي'},{t:'س',s:'سين'},
      {t:'ش',s:'شين'},{t:'ص',s:'صاد'},{t:'ض',s:'ضاد'},{t:'ط',s:'طاء'},
      {t:'ظ',s:'ظاء'},{t:'ع',s:'عين'},{t:'غ',s:'غين'},{t:'ف',s:'فاء'},
      {t:'ق',s:'قاف'},{t:'ك',s:'كاف'},{t:'ل',s:'لام'},{t:'م',s:'ميم'},
      {t:'ن',s:'نون'},{t:'ه',s:'هاء'},{t:'و',s:'واو'},{t:'ي',s:'ياء'}
    ],

    words: [
      // Objects / Home
      'باب','نافذة','كرسي','طاولة','سرير','مطبخ','حمام','مفتاح','ساعة','مرآة',
      'سلم','ستارة','وسادة','بطانية','ثلاجة','مروحة','تلفاز','هاتف','مصباح','صحن',
      // School
      'كتاب','قلم','مدرسة','معلم','طالب','لوح','ورقة','حقيبة','درس','صف',
      'مسطرة','مقص','ممحاة','رسم','خريطة',
      // Nature
      'شمس','قمر','نجم','سماء','أرض','بحر','نهر','جبل','صحراء','غابة',
      'زهرة','شجرة','عشب','مطر','ثلج','هواء','نور','ماء','نار','تراب',
      'سحاب','صخرة','بركة','واد','شلال',
      // Animals
      'كلب','قطة','طير','سمك','أسد','فيل','حصان','بقرة','دجاجة','أرنب',
      'نمر','قرد','جمل','زرافة','ضفدع','بطة','ديك','عصفور','نسر','ثعلب',
      'حوت','دلفين','سلحفاة','فراشة','نحلة',
      // Food & Drink
      'تفاح','خبز','حليب','تمر','عسل','أرز','لحم','بيضة','جبن','عصير',
      'برتقال','موز','عنب','ليمون','فراولة','خيار','طماطم','سكر','زيت','ملح',
      'شوكولاتة','بسكويت','حساء','بيتزا','سمك',
      // Body
      'يد','رجل','رأس','عين','أذن','أنف','فم','قلب','أصبع','شعر',
      // Colors
      'أحمر','أزرق','أخضر','أصفر','أبيض','أسود','بنفسجي','برتقالي','بني','وردي',
      // Transport
      'سيارة','طائرة','قطار','سفينة','دراجة','حافلة','مركبة','قارب'
    ],

    sentences: [
      // Existing 18
      'الشمس تشرق صباحاً',
      'القطة تشرب الحليب',
      'الطفل يلعب بالكرة',
      'الأم تطبخ الطعام',
      'الأب يقرأ الكتاب',
      'السماء لونها أزرق',
      'الزهرة جميلة جداً',
      'البيت كبير ونظيف',
      'المدرسة قريبة من البيت',
      'الطير يغرد فوق الشجرة',
      'النهر يجري بهدوء',
      'الأرض خضراء وجميلة',
      'القمر يضيء الليل',
      'المعلم يشرح الدرس',
      'الأولاد يلعبون في الحديقة',
      'الماء بارد وصافٍ',
      'الكلب يجري بسرعة',
      'أنا أحب القراءة كثيراً',
      // New sentences
      'الكتاب على الطاولة',
      'الجو حار في الصيف',
      'الطفلة ترسم صورة جميلة',
      'الحصان يجري في الحقل',
      'الأرنب يأكل الجزر',
      'الثلج يغطي قمم الجبال',
      'البحر مليء بالأسماك الملونة',
      'المعلم يكتب على السبورة',
      'الطلاب يذاكرون دروسهم',
      'الجمل يعيش في الصحراء',
      'السيارة تسير في الطريق',
      'الطائرة تحلق في السماء',
      'الأم تحب أطفالها كثيراً',
      'الحديقة مليئة بالورود',
      'نحن نحب وطننا كثيراً',
      'الشجرة تعطينا الهواء النقي',
      'العصفور يغرد في الصباح',
      'الأسد ملك الغابة',
      'الجو بارد في الشتاء',
      'الصديق الجيد يساعدك دائماً',
      'الماء ضروري للحياة',
      'الرياضة تقوي الجسم',
      'الطعام الصحي مفيد للجسم',
      'نذهب إلى السوق كل أسبوع',
      'الكتاب خير صديق وجليس',
      'اللعب مع الأصدقاء ممتع',
      'الصحة نعمة غالية',
      'المطر ينزل من السماء',
      'الفراشة تطير فوق الزهور',
      'النجوم تضيء السماء ليلاً',
      'البطة تسبح في البركة',
      'الأرنب يقفز بسرعة كبيرة'
    ],

    paragraphs: [
      // Existing 8
      'الطفل الصغير يحب اللعب في الحديقة.\nيجري ويقفز مع أصدقائه.\nيضحك ويفرح كثيراً.\nالطفل سعيد جداً.',
      'بيتنا جميل وكبير.\nفيه غرفتان ومطبخ واسع.\nالأم تنظف البيت كل يوم.\nنحن نحب بيتنا كثيراً.',
      'المدرسة مكان التعلم والمعرفة.\nنذهب إليها كل يوم بفرح.\nالمعلم يعلمنا القراءة والكتابة.\nنحن نحب مدرستنا الجميلة.',
      'الحديقة جميلة في فصل الربيع.\nالأزهار تتفتح وتعطر الهواء.\nالطيور تغرد بسعادة فوق الأشجار.\nالجو رائع ومبهج جداً.',
      'الماء نعمة كبيرة من الله.\nنشرب الماء كل يوم للصحة.\nالماء ينظف أجسامنا ويروي عطشنا.\nيجب أن نحافظ على الماء النظيف.',
      'الليل يأتي بعد النهار الجميل.\nالقمر والنجوم تضيء السماء الداكنة.\nالناس يرتاحون وينامون في الليل.\nالليل هادئ وجميل ومريح.',
      'في الصباح نستيقظ مبكراً.\nنغسل وجوهنا ونتناول الفطور.\nثم نذهب إلى المدرسة بنشاط.\nالصباح وقت جميل ومفيد.',
      'البحر واسع وجميل جداً.\nتسبح فيه أسماك كثيرة وملونة.\nالأمواج تتحرك بهدوء ولطف.\nيحب الناس الجلوس على الشاطئ.',
      // New paragraphs
      'في السنة أربعة فصول جميلة.\nالربيع والصيف والخريف والشتاء.\nلكل فصل جماله وطبيعته الخاصة.\nنحب جميع فصول السنة.',
      'عندي أب وأم وأخ وأخت.\nنحن أسرة صغيرة سعيدة.\nنتعاون ونحب بعضنا كثيراً.\nالأسرة المحبة كنز ثمين.',
      'زرعنا شجرة في حديقتنا الصغيرة.\nسقيناها كل يوم باهتمام وحب.\nبعد فترة أعطتنا فاكهة لذيذة.\nالعمل الجاد يؤتي ثماره دائماً.',
      'المطر نعمة كبيرة من الله.\nينزل من السماء ليروي الأرض والنباتات.\nتشرب منه الأشجار والزهور والمحاصيل.\nنفرح كثيراً حين يسقط المطر.',
      'الرياضة مفيدة للجسم والعقل معاً.\nيجب أن يمارس كل طفل الرياضة يومياً.\nكرة القدم والسباحة من أجمل الرياضات.\nالجسم السليم في العقل السليم دائماً.',
      'الصديق الحقيقي يبقى معك في كل وقت.\nيساعدك في الشدة والرخاء بصدق.\nلا يحزنك ولا يؤذيك أبداً.\nاحرص على أصدقائك الطيبين دائماً.',
      'ذهبنا إلى السوق مع الأم يوم الجمعة.\nكانت المحلات مليئة بالخضار والفاكهة.\nاشترينا حاجياتنا وعدنا إلى البيت.\nالسوق مكان نشيط ومليء بالحياة.',
      'الكتاب خير رفيق وصديق في كل وقت.\nيعلمنا ويرفه عنا في نفس الوقت.\nالقراءة تفتح أمامنا آفاقاً جديدة رائعة.\nأحب القراءة وأقرأ كتاباً كل أسبوع.',
      'الأكل الصحي يجعلنا أقوياء ونشيطين.\nنأكل الخضار والفاكهة يومياً.\nالماء والحليب مشروبان مفيدان للصحة.\nاحرص على غذائك الصحي دائماً.',
      'النوم الكافي ضروري لصحة الجسم.\nينام الإنسان ليستريح وينشط من جديد.\nيجب أن ينام الطفل ثماني ساعات.\nالنوم المبكر يجعلك نشيطاً وسعيداً.',
      'الحيوانات الأليفة تسعد أصحابها كثيراً.\nالكلب والقطة من أشهر الحيوانات الأليفة.\nهي تؤنس أصحابها وتلعب معهم.\nيجب أن نعتني بالحيوانات ونحبها.',
      'في الغابة أشجار طويلة كثيرة.\nتعيش فيها حيوانات كثيرة ومتنوعة.\nالطيور تغرد وتبني أعشاشها بين الأغصان.\nالغابة بيئة جميلة يجب أن نحافظ عليها.',
      'النحلة حشرة صغيرة نافعة جداً.\nتطير من زهرة إلى زهرة بجد ونشاط.\nتجمع الرحيق وتصنع العسل اللذيذ.\nالعسل غذاء صحي ومفيد لنا جميعاً.'
    ]
  },

  // ══════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════
  en: {

    letters: [
      {t:'A',s:'Apple'},{t:'B',s:'Ball'},{t:'C',s:'Cat'},{t:'D',s:'Dog'},
      {t:'E',s:'Egg'},{t:'F',s:'Fish'},{t:'G',s:'Girl'},{t:'H',s:'Hat'},
      {t:'I',s:'Ice'},{t:'J',s:'Jam'},{t:'K',s:'King'},{t:'L',s:'Lion'},
      {t:'M',s:'Moon'},{t:'N',s:'Nest'},{t:'O',s:'Orange'},{t:'P',s:'Pen'},
      {t:'Q',s:'Queen'},{t:'R',s:'Rose'},{t:'S',s:'Sun'},{t:'T',s:'Tree'},
      {t:'U',s:'Umbrella'},{t:'V',s:'Van'},{t:'W',s:'Water'},{t:'X',s:'Box'},
      {t:'Y',s:'Yellow'},{t:'Z',s:'Zebra'}
    ],

    words: [
      // Objects / Home
      'door','window','chair','table','bed','kitchen','bathroom','key','clock','mirror',
      'stairs','curtain','pillow','blanket','fridge','fan','television','phone','lamp','plate',
      // School
      'book','pen','school','teacher','student','board','paper','bag','lesson','class',
      'ruler','scissors','eraser','drawing','map',
      // Nature
      'sun','moon','star','sky','earth','sea','river','mountain','desert','forest',
      'flower','tree','grass','rain','snow','wind','light','water','fire','soil',
      'cloud','rock','pond','valley','waterfall',
      // Animals
      'cat','dog','bird','fish','lion','elephant','horse','cow','chicken','rabbit',
      'tiger','monkey','camel','giraffe','frog','duck','rooster','sparrow','eagle','fox',
      'whale','dolphin','turtle','butterfly','bee',
      // Food & Drink
      'apple','bread','milk','date','honey','rice','meat','egg','cheese','juice',
      'orange','banana','grape','lemon','strawberry','cucumber','tomato','sugar','oil','salt',
      'chocolate','biscuit','soup','pizza','sandwich',
      // Body
      'hand','foot','head','eye','ear','nose','mouth','heart','finger','hair',
      // Colors
      'red','blue','green','yellow','white','black','purple','orange','brown','pink',
      // Transport
      'car','plane','train','ship','bicycle','bus','truck','boat'
    ],

    sentences: [
      // Existing 18
      'The sun is very bright.',
      'I like to read books.',
      'The dog runs very fast.',
      'She has a red ball.',
      'The sky is blue today.',
      'We play in the park.',
      'He drinks cold water.',
      'The cat is sleeping.',
      'Birds can fly so high.',
      'Mom bakes a sweet cake.',
      'Fish swim in the river.',
      'The tree is very tall.',
      'I love my family a lot.',
      'Stars shine at night.',
      'We go to school every day.',
      'Rain falls from the sky.',
      'The baby is very cute.',
      'Flowers are beautiful and nice.',
      // New sentences
      'The book is on the table.',
      'The weather is hot in summer.',
      'The girl draws a pretty picture.',
      'The horse runs fast in the field.',
      'The rabbit eats a carrot.',
      'Snow covers the mountain tops.',
      'The sea is full of colorful fish.',
      'The teacher writes on the board.',
      'Students study their lessons every day.',
      'A camel lives in the hot desert.',
      'The car drives on the road.',
      'The plane flies high in the sky.',
      'A mother loves her children dearly.',
      'The garden is full of pretty flowers.',
      'We love our home very much.',
      'Trees give us clean fresh air.',
      'The bird sings in the morning.',
      'The lion is king of the jungle.',
      'The weather is cold in winter.',
      'A good friend always helps you.',
      'Water is necessary for life and health.',
      'Sports make the body and mind strong.',
      'Healthy food makes us strong and active.',
      'We go to the market every week.',
      'A book is the best companion.',
      'Playing with friends is a lot of fun.',
      'Health is a gift we must value.',
      'Rain falls down from the dark clouds.',
      'The butterfly flies over the flowers.',
      'Stars fill the sky on a clear night.',
      'The duck swims in the pond.',
      'The rabbit hops quickly across the grass.'
    ],

    paragraphs: [
      // Existing 8
      'The sun rises every morning.\nIt gives us light and warmth.\nPlants grow because of the sun.\nThe sun is very important for life.',
      'I have a little dog named Max.\nHe is brown and very friendly.\nMax loves to play and run around.\nHe is my best friend.',
      'School is a great place to learn.\nWe study reading and writing.\nOur teacher is kind and helpful.\nI enjoy going to school every day.',
      'The garden is full of flowers.\nButterflies fly from flower to flower.\nBees collect honey from the blooms.\nThe garden smells very sweet.',
      'Water is very important for us.\nWe drink water every day.\nWater keeps our bodies healthy.\nWe must always save clean water.',
      'Night comes after the bright day.\nThe moon and stars light the sky.\nOwls and bats come out at night.\nEveryone sleeps peacefully at night.',
      'I wake up early every morning.\nI wash my face and eat breakfast.\nThen I go to school with energy.\nMorning is a wonderful time of day.',
      'The ocean is wide and beautiful.\nMany colorful fish live inside it.\nThe waves move gently to the shore.\nPeople love sitting on the beach.',
      // New paragraphs
      'There are four seasons in a year.\nSpring, summer, autumn, and winter.\nEach season has its own beauty.\nWe enjoy all the seasons of the year.',
      'I have a dad, mom, brother, and sister.\nWe are a small and happy family.\nWe help each other and love each other.\nA loving family is the greatest treasure.',
      'We planted a tree in our garden.\nWe watered it carefully every single day.\nAfter some time, it gave us sweet fruit.\nHard work and care always pay off.',
      'Rain is a wonderful gift of nature.\nIt falls from the sky to water the earth.\nTrees, flowers, and crops all drink from it.\nWe feel happy and grateful when it rains.',
      'Sports are great for the body and mind.\nEvery child should play and exercise daily.\nFootball and swimming are wonderful sports.\nA healthy body leads to a healthy mind.',
      'A true friend is always by your side.\nThey help you in good times and in bad.\nThey never hurt or upset you at all.\nAlways treasure your good and honest friends.',
      'We went to the market with mom on Friday.\nThe shops were full of vegetables and fruit.\nWe bought what we needed and went home happy.\nThe market is a lively and exciting place.',
      'A book is the best friend you can have.\nIt teaches you and entertains you at once.\nReading opens amazing new worlds before us.\nI love reading and try to read every week.',
      'Healthy food makes us strong and active.\nWe eat vegetables and fruit every single day.\nWater and milk are very good for our health.\nAlways take good care of what you eat.',
      'Getting enough sleep is vital for health.\nWe sleep so our bodies can rest and recover.\nA child should sleep for about eight hours.\nSleeping early makes you active and happy.',
      'Pet animals bring great joy to their owners.\nDogs and cats are the most popular pets.\nThey keep us company and love to play.\nWe must take good care of all animals.',
      'The forest is full of tall and leafy trees.\nMany different animals live inside the forest.\nBirds sing and build their nests in the branches.\nThe forest is a beautiful place we must protect.',
      'The bee is a small but very useful insect.\nIt flies from flower to flower collecting nectar.\nIt makes sweet honey that is good for us.\nHoney is a healthy and delicious natural food.'
    ]
  }
};

// ─────────────────────────────────────────────────────────
//  LEVEL CONFIGURATION
// ─────────────────────────────────────────────────────────
const LEVEL_META = {
  ar: {
    1: { label: 'Level 1 — الحروف',       desc: 'اضغط على البطاقة عندما يقرأ الحرف صحيحاً.',             key: 'letters'    },
    2: { label: 'Level 2 — الكلمات',      desc: 'اضغط على البطاقة عندما يقرأ الكلمة صحيحاً.',            key: 'words'      },
    3: { label: 'Level 3 — الجمل',        desc: 'اضغط على البطاقة عندما يقرأ الجملة صحيحاً.',            key: 'sentences'  },
    4: { label: 'Level 4 — الفقرات',      desc: 'اضغط على البطاقة عندما يقرأ الفقرة صحيحاً.',            key: 'paragraphs' },
    5: { label: 'Level 5 — الكتابة',      desc: 'اقرأ الكلمة بصوت عالٍ. اضغط ✓ عندما يكتبها صحيحاً.', key: 'words'      }
  },
  en: {
    1: { label: 'Level 1 — Letters',     desc: 'Tap the card when your student reads the letter correctly.',     key: 'letters'    },
    2: { label: 'Level 2 — Words',       desc: 'Tap the card when your student reads the word correctly.',       key: 'words'      },
    3: { label: 'Level 3 — Sentences',   desc: 'Tap the card when your student reads the sentence correctly.',   key: 'sentences'  },
    4: { label: 'Level 4 — Paragraphs',  desc: 'Tap the card when your student reads the paragraph correctly.',  key: 'paragraphs' },
    5: { label: 'Level 5 — Writing',     desc: 'Say the word aloud. Click ✓ Correct when the student writes it.', key: 'words'    }
  }
};
