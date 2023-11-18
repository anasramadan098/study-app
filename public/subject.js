// Setting All Data

let units = [];

let lessons = {

};

let content = {
    
}

const excersices = {
    "التدوين و التلخيص":  [ 
        { 
            "Question" : "ما هو التلخيص والتدوين؟", 
            "answers" : ['حذف الأفكار الفرعية والاحتفاظ بالأفكار الأساسية', 'استخدام الجمل القصيرة المفهومة', 'استخدام الألوان لتمييز الأفكار الرئيسية'], 
            "correctAnswer" : 'حذف الأفكار الفرعية والاحتفاظ بالأفكار الأساسية',  
        }, 
        { 
            "Question" : "ما هي طرق التلخيص؟", 
            "answers" : ['استخدام الجمل القصيرة المفهومة', 'كتابة المحتوى بصياغتي', 'استخدام العناوين الرئيسية والفرعية والترقيم'], 
            "correctAnswer" : 'استخدام الجمل القصيرة المفهومة',  
        }, 
        { 
            "Question" : "ما هي فوائد التلخيص؟", 
            "answers" : ['توفير الوقت والجهد', 'تمييز العناوين الرئيسية والفرعية', 'تدريب الطلاب على تنظيم وترتيب الأفكار'], 
            "correctAnswer" : 'توفير الوقت والجهد',  
        } 
    ], 
    "مبادئ الثقافة الرقمية  (الجزء الأول)": [
        {
            "Question": "ما هو نوع الكمبيوتر الذي يتميز بحجمه الكبير وإمكانياته البسيطة؟",
            "answers": ["الحاسوب الشخصي", "الجهاز اللوحي", "السيرفر"],
            "correctAnswer": "السيرفر"
        },
        {
            "Question": "ما هو نوع الكمبيوتر الذي يتميز بخفة وزنه وإمكانياته المحدودة المدمجة؟",
            "answers": ["الحاسوب الشخصي", "السيرفر", "الجهاز اللوحي"],
            "correctAnswer": "الجهاز اللوحي"
        },
        {
            "Question": "ما هو نوع الكمبيوتر الذي يتميز بإمكانياته العالية ويعمل 24 ساعة؟",
            "answers": ["الحاسوب الشخصي", "الجهاز اللوحي", "السيرفر"],
            "correctAnswer": "السيرفر"
        },
        {
            "Question": "ما هو سطح المكتب؟",
            "answers": ["واجهة المستخدم الرسومية", "واجهة المستخدم النصية", "واجهة المستخدم الرئيسية للمستخدم"],
            "correctAnswer": "واجهة المستخدم الرئيسية للمستخدم"
        },
        {
            "Question": "ما هو تسجيل الدخول؟",
            "answers": ["عملية دخول المستخدم إلى الحساب", "عملية دخول المستخدم للجهاز", "عملية إنشاء حساب جديد"],
            "correctAnswer": "عملية دخول المستخدم للجهاز"
        },
        {
            "Question": "ما هي كلمة السر؟",
            "answers": ["كلمة معقدة تتكون من أحرف وأرقام ورموز", "كلمة مخترعة من قبل المستخدم", "كلمة يصعب اختراقها"],
            "correctAnswer": "كلمة مخترعة من قبل المستخدم"
        },
        {
            "Question": "ما هو Shut Down؟",
            "answers": ["إغلاق التطبيق الحالي", "إغلاق نظام التشغيل", "إغلاق الكمبيوتر تمامًا"],
            "correctAnswer": "إغلاق الكمبيوتر تمامًا"
        },
        {
            "Question": "ما هي الملفات؟",
            "answers": ["ملفات تعريف المستخدم", "مساحات لتخزين البيانات والمعلومات", "مجموعات من البيانات والمعلومات"],
            "correctAnswer": "مساحات لتخزين البيانات والمعلومات"
        },
        {
            "Question": "ما هي البرامج؟",
            "answers": ["مجموعة من التطبيقات", "مجموعة من الملفات", "مجموعة توجيهات غير ملموسة"],
            "correctAnswer": "مجموعة توجيهات غير ملموسة"
        },
        {
            "Question": "ما هي المعدات الصلبة؟",
            "answers": ["مكونات الكمبيوتر الخارجية", "مكونات الكمبيوتر الداخلية", "أي قطعة في الكمبيوتر يمكن لمسها ورؤيتها"],
            "correctAnswer": "أي قطعة في الكمبيوتر يمكن لمسها ورؤيتها"
        },
        {
            "Question": "ما هو الفيروس؟",
            "answers": ["برنامج يحذف الملفات أو البيانات", "برنامج يمنع تشغيل البرامج أو الأجهزة الأخرى", "برنامج ضار يصيب البرامج أو الأجهزة الأخرى"],
            "correctAnswer": "برنامج ضار يصيب البرامج أو الأجهزة الأخرى"
        },
        {
            "Question": "ما هي الشبكات؟",
            "answers": ["مجموعة من البرامج المتصلة معًا", "مجموعة من التطبيقات المتصلة معًا", "مجموعة من أجهزة الكمبيوتر المتصلة معًا"],
            "correctAnswer": "مجموعة من أجهزة الكمبيوتر المتصلة معًا"
        },
        {
            "Question": "ما هي الشبكات المحلية؟",
            "answers": ["شبكات عالمية", "شبكات صغيرة نسبيًا", "شبكات كبيرة نسبيًا"],
            "correctAnswer": "شبكات صغيرة نسبيًا"
        },
        {
            "Question": "ما هي الشبكات العالمية؟",
            "answers": ["مجموعة من الشبكات منتشرة في العالم كله", "شبكات صغيرة نسبيًا", "شبكات كبيرة نسبيًا"],
            "correctAnswer": "مجموعة من الشبكات منتشرة في العالم كله"
        },
        {
            "Question": "ما هو المودم؟",
            "answers": ["جهاز يوفر اتصال بالإنترنت", "جهاز يتصل بالإنترنت لاسلكيًا", "جهاز متصل بالإنترنت ويترجم إشارات مزود الخدمة إلى إشارات يمكن للكمبيوتر فهمها"],
            "correctAnswer": "جهاز متصل بالإنترنت ويترجم إشارات مزود الخدمة إلى إشارات يمكن للكمبيوتر فهمها"
        },
        
    ],
    "Flash Cards":  [
            {
                "Question" : "What's The Meaning Of Mind Maps",
                "answers" : ['1','2','3'],
                "correctAnswer" : '1', 
            },
            {
                "Question" : "What 's The Meaning Of Flash Cards",
                "answers" : ['4','5','6'],
                "correctAnswer" : '5', 
            },
            {
                "Question" : "What 's The Meaning Of Flash Maps",
                "answers" : ['1','2','3'],
                "correctAnswer" : '3', 
            },
        ],
    "مفهوم الإقتصاد" : [
        {
            "Question": "ما هو نظام الاقتصاد؟",
            "answers": ['الأنشطة المرتبطة بتصنيع السلع فقط', 'جميع الأنشطة المتعلقة بإنتاج واستهلاك السلع والخدمات', 'العمليات المتعلقة بالتكنولوجيا فقط'],
            "correctAnswer": 'جميع الأنشطة المتعلقة بإنتاج واستهلاك السلع والخدمات'
        },
        {
            "Question": "ما العوامل التي تميز أنواع الاقتصاد؟",
            "answers": ['التنمية الثقافية', 'مستوى التطور والتكنولوجيا والموارد المتاحة', 'اللغة الرسمية'],
            "correctAnswer": 'مستوى التطور والتكنولوجيا والموارد المتاحة'
        },
        {
            "Question": "ما هو دور مستوى التطور في تحديد نوع الاقتصاد؟",
            "answers": ['ليس له أي تأثير', 'يؤثر على نوع الاقتصاد', 'تأثيره يقتصر على الثقافة'],
            "correctAnswer": 'يؤثر على نوع الاقتصاد'
        },
        {
            "Question": "العمليات التي تشمل إنتاج السلع والخدمات تشكل جزءًا من نظام الاقتصاد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "التكنولوجيا المستخدمة هي عامل يميز أنواع الاقتصاد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        }
    ],
    "التبادل في الإقتصاد" : [
        {
            "Question": "ما هو التعريف الصحيح للتجارة؟",
            "answers": ["تبادل الأموال بين الأفراد والشركات", "تبادل المنتجات والخدمات بين الأفراد والشركات والدول", "تبادل السلع فقط بين الدول"],
            "correctAnswer": "تبادل المنتجات والخدمات بين الأفراد والشركات والدول"
        },
        {
            "Question": "ما هي إحدى أهميات التجارة؟",
            "answers": ["زيادة الإيرادات الناتجة عن زيادة الإنتاج", "تحفيز الإبتكار والتطوير", "جعل العملات النقدية هي الوسيلة الوحيدة للتبادل"],
            "correctAnswer": "زيادة الإيرادات الناتجة عن زيادة الإنتاج"
        },
        {
            "Question": "ما هي خطوة تطور الاقتصاد التي تشمل تبادل المنتج بمنتج ذو قيمة مماثلة؟",
            "answers": ["الاقتصاد الزراعي", "الاقتصاد التقليدي", "الاقتصاد الصناعي"],
            "correctAnswer": "الاقتصاد التقليدي"
        },
        {
            "Question": "ما هو الاقتصاد الخدمي؟",
            "answers": ["تبادل الخدمات بالذهب", "تبادل الخدمات بالعملات النقدية", "تبادل الخدمات بدون مقابل مالي"],
            "correctAnswer": "تبادل الخدمات بالعملات النقدية"
        },
        {
            "Question": "تقوم التجارة بتلبية الاحتياجات والرغبات.",
            "answers": ["صح", "خطأ"],
            "correctAnswer": "صح"
        },
        {
            "Question": "الاقتصاد التقليدي يتضمن تبادل المنتج بمنتج ذو قيمة مماثلة.",
            "answers": ["صح", "خطأ"],
            "correctAnswer": "صح"
        },
        {
            "Question": "تشجيع التخصص هو أحد أهميات التجارة.",
            "answers": ["صح", "خطأ"],
            "correctAnswer": "صح"
        },
        {
            "Question": "الاقتصاد الخدمي يتضمن تبادل الخدمات بالذهب.",
            "answers": ["صح", "خطأ"],
            "correctAnswer": "خطأ"
        }
    ],
    "المنتجون والمستهلكون": [
        {
            "Question": "ما هو دور المنتجين في النظام الاقتصادي؟",
            "answers": ["القيام بشراء السلع والخدمات", "تصميم المنتجات وإنتاجها وتوفير الخدمات", "تحديد الاتجاهات الاستهلاكية والأذواق"],
            "correctAnswer": "تصميم المنتجات وإنتاجها وتوفير الخدمات"
        },
        {
            "Question": "ما الذي يعمل المنتجون على تحسينه لزيادة الربح؟",
            "answers": ["تحسين جودة المنتجات وخفض التكاليف", "زيادة الإنتاج بدون تغيير", "تقليل الجودة لتوفير التكاليف"],
            "correctAnswer": "تحسين جودة المنتجات وخفض التكاليف"
        },
        {
            "Question": "ماذا يعرف دور المنتجين عند العمل مع الشركات؟",
            "answers": ["دورة الأعمال", "الدورة الاقتصادية", "دورة التسويق"],
            "correctAnswer": "دورة الأعمال"
        },
        {
            "Question": "ما هو دور المستهلكين في النظام الاقتصادي؟",
            "answers": ["تقديم الخدمات", "بيع المنتجات", "شراء الخدمات والمنتجات"],
            "correctAnswer": "شراء الخدمات والمنتجات"
        },
        {
            "Question": "كيف يساهم تصرف المستهلكين في زيادة الانتاج والتوسع في العمل؟",
            "answers": ["بتقليل الطلب على المنتجات", "بالمشاركة في تصميم المنتجات", "بزيادة طلب المنتجات"],
            "correctAnswer": "بزيادة طلب المنتجات"
        },
        {
            "Question": "ما الذي يحددونه المستهلكون في النظام الاقتصادي؟",
            "answers": ["اتجاهات الاستهلاك والأذواق", "تحديد السلع المتاحة في السوق", "تحديد أسعار المنتجات"],
            "correctAnswer": "اتجاهات الاستهلاك والأذواق"
        }
    ]
    ,
    "العرض و اطلب" : [
        {
            "Question": "ما هو تأثير الوقت على العرض والطلب؟",
            "answers": ['الوقت لا يؤثر على العرض والطلب', 'الوقت يزيد العرض والطلب', 'الوقت يقلل العرض والطلب', 'الوقت يؤثر بشكل عشوائي على العرض والطلب'],
            "correctAnswer": 'الوقت يؤثر بشكل عشوائي على العرض والطلب'
        },
        {
            "Question": "العرض يعكس العلاقة العكسية مع السعر وفقًا لقانون العرض والطلب.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "كيف يمكن أن تؤثر التطور التكنولوجي على العرض؟",
            "answers": ['يزيد من تكلفة المصنع ويقلل العرض', 'يحسن الإنتاج ويزيد العرض', 'لا يؤثر التطور التكنولوجي على العرض', 'يقلل من فعالية الإنتاج ويقلل العرض'],
            "correctAnswer": 'يحسن الإنتاج ويزيد العرض'
        },
        {
            "Question": "التغير في الحالة الاقتصادية لا يؤثر على الطلب.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "الدعاية قد تقلل من السعر المطلوب على المنتجات.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "التغير في الدخل ليس له تأثير على الطلب وفقًا لقانون الطلب.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "العوامل الموسمية يمكن أن تؤثر على قرارات التصنيع والشراء.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "التغيرات الموسمية تؤثر بشكل أساسي على العرض وليس الطلب.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "ما هو تأثير السعر على قرارات التصنيع والشراء؟",
            "answers": ['ارتفاع الأسعار يزيد الإنتاج ويزيد الشراء', 'انخفاض الأسعار يقلل الإنتاج ويزيد الشراء', 'السعر لا يؤثر على قرارات التصنيع والشراء', 'ارتفاع الأسعار يقلل الإنتاج ويقلل الشراء'],
            "correctAnswer": 'انخفاض الأسعار يقلل الإنتاج ويزيد الشراء'
        },
        {
            "Question": "التطور التكنولوجي يمكن أن يؤثر إيجابًا على تكاليف المصنع.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        }
    ],
    "الاحتياجات و الرغباات" : [
        {
            "Question": "ما هو الاختلاف الأساسي بين الاحتياجات والرغبات؟",
            "answers": ['الاحتياجات تكون مادية بينما الرغبات قد تكون عاطفية', 'الاحتياجات هي الطلبات الرئيسية بينما الرغبات هي الطلبات الغير ضرورية', 'الاحتياجات تكون ثابتة بين الأفراد بينما الرغبات تختلف'],
            "correctAnswer": 'الاحتياجات هي الطلبات الرئيسية الضرورية التي يحتاجها الإنسان للحياة، بينما الرغبات هي الطلبات الغير ضرورية وتختلف من شخص لآخر'
        },
        {
            "Question": "من الأمثلة على الاحتياجات؟",
            "answers": ['شراء سيارة جديدة', 'الحصول على تعليم جيد', 'الاستمتاع بالهوايات الترفيهية'],
            "correctAnswer": 'الحصول على تعليم جيد'
        },
        {
            "Question": "هل يمكن أن تكون الرغبات مشتركة بين الأفراد؟",
            "answers": ['نعم، جميع الأفراد يشعرون بنفس الرغبات', 'لا، الرغبات تختلف تمامًا من شخص لآخر', 'تعتمد على السياق والظروف'],
            "correctAnswer": 'تعتمد على السياق والظروف'
        },
        {
            "Question": "هل يمكن للرغبات أن تتغير مع مرور الوقت؟",
            "answers": ['نعم، قد تتغير الرغبات بتطور الظروف والتجارب', 'لا، الرغبات ثابتة طوال الحياة', 'تعتمد على الشخص'],
            "correctAnswer": 'نعم، قد تتغير الرغبات بتطور الظروف والتجارب'
        },
        {
            "Question": "كيف يمكن تحقيق الاحتياجات والرغبات في مجتمع؟",
            "answers": ['عبر تحقيق التوازن بين الاحتياجات والرغبات الفردية', 'بتحديد الاحتياجات وتجاوز الرغبات', 'عن طريق تحديد الرغبات فقط'],
            "correctAnswer": 'عبر تحقيق التوازن بين الاحتياجات والرغبات الفردية'
        }
    ]
    ,
    "مفهوم الندرة في الاقتصاد" :[
        {
            "Question": "الندرة تعني وجود رغبات محدودة في عالم محدود الموارد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "الاقتصاد يتعامل مع الموارد الغير محدودة والرغبات المحدودة.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "المصادر المحدودة تشمل الموارد البشرية فقط.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "الرغبات الغير محدودة تؤدي إلى زيادة الطلب على الموارد المحدودة.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "رأس المال يعتبر من الموارد المحدودة في الاقتصاد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "ما هو مفهوم الندرة في الاقتصاد؟",
            "answers": ['تواجد الرغبات في عالم محدود الموارد', 'غياب الرغبات في عالم محدود الموارد', 'تواجد الرغبات في عالم غير محدود الموارد'],
            "correctAnswer": 'تواجد الرغبات في عالم محدود الموارد'
        },
        {
            "Question": "ما الذي يتمثل فيه الموارد النادرة في الاقتصاد؟",
            "answers": ['تتمتع بقيمة اقتصادية منخفضة', 'تتمتع بقيمة اقتصادية عالية', 'لا تمتلك قيمة اقتصادية'],
            "correctAnswer": 'تتمتع بقيمة اقتصادية عالية'
        },
        {
            "Question": "من المسؤول عن إدارة الموارد وتجميعها في الاقتصاد؟",
            "answers": ['الأفراد', 'المؤسسات', 'الحكومة'],
            "correctAnswer": 'المؤسسات'
        },
        {
            "Question": "ما الذي يفعل الاقتصاد للتعامل مع الرغبات غير المحدودة والموارد المحدودة؟",
            "answers": ['يزيد من الرغبات', 'يقلل من الطلب', 'يتحكم في التوزيع ويركز على الأولويات'],
            "correctAnswer": 'يتحكم في التوزيع ويركز على الأولويات'
        },
        {
            "Question": "ما الذي تشمله الموارد المحدودة في الاقتصاد؟",
            "answers": ['الموارد الطبيعية فقط', 'الموارد البشرية فقط', 'الموارد الطبيعية والبشرية ورأس المال'],
            "correctAnswer": 'الموارد الطبيعية والبشرية ورأس المال'
        }
    ],
    "تأثير الاختيارات الشرائية للمستهلكين على الاقتصاد" : [
        {
            "Question": "كيف يؤثر انخفاض الطلب على الشركات؟",
            "answers": ['تزيد الربحية', 'تفقد الشركة في الإيرادات', 'تؤدي إلى توسيع الأعمال'],
            "correctAnswer": 'تفقد الشركة في الإيرادات'
        },
        {
            "Question": "ما الذي يحدد حجم الطلب على المنتجات؟",
            "answers": ['الندرة والمصادر المحدودة', 'حجم الاقتصاد', 'الإعلانات التسويقية'],
            "correctAnswer": 'الندرة والمصادر المحدودة'
        },
        {
            "Question": "ما هي العواقب المحتملة لتباطؤ الاقتصاد؟",
            "answers": ['زيادة في الاستثمارات', 'ركود', 'تحسين فرص العمل'],
            "correctAnswer": 'ركود'
        },
        {
            "Question": "كيف يمكن للشركات التكيف مع تغيرات الطلب؟",
            "answers": ['بتقليل إنتاجها', 'بتوسيع أعمالها', 'بزيادة الأسعار'],
            "correctAnswer": 'بتقليل إنتاجها'
        },
        {
            "Question": "كيف يمكن للشركات تحسين فرص العمل؟",
            "answers": ['بتقليل التوظيف', 'بتحسين الأجور', 'بابتكار الأعمال والتوسع'],
            "correctAnswer": 'بابتكار الأعمال والتوسع'
        },
        {
            "Question": "تزيد زيادة الطلب عن المعتاد على المنتجات من نمو الاقتصاد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "تأثير انخفاض الطلب يمكن أن يؤدي إلى تباطؤ الاقتصاد.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        },
        {
            "Question": "يمكن للشركات التكيف مع تغيرات الطلب عبر زيادة الإنتاج دائمًا.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "الندرة والمصادر المحدودة تؤثر فقط على اتخاذ القرارات الشرائية الفردية.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'خطأ'
        },
        {
            "Question": "تحديد الرغبات التي يمكن تلبيتها يعتمد على الندرة والمصادر المتاحة.",
            "answers": ['صح', 'خطأ'],
            "correctAnswer": 'صح'
        }
    ],
    
}


// Getting All Data Dynamic
const subject = location.pathname.replaceAll('/','').replace('subjects','').replace('index.html','')

fetch(`../../files/${subject}.json`).then(res => res.json()).then(data => {

    // Loop On Data
    data.map(obj => {
        // Change The Units 
        units.push(obj.unitName);

        // Change The Lessons
        lessons[obj.unitName] = obj.Lessons

        // Change The Content
        let contentKeys = Object.keys(obj.content);
        contentKeys.map(key => {
            content[key] = obj.content[key];
        })
    })


const holder = document.querySelector('.boxes');


function createUnitsDivs() {
    // Loop On Units And Craete A Elements For It
    units.forEach(e => {
        // Create Div
        const div = document.createElement('div');
        div.className = 'box';
        // Create H4
        const h4 = document.createElement('h4');
        h4.textContent = e;
        // Append H4 to Div
        div.appendChild(h4);

        // Append Div To The Holder
        holder.appendChild(div);

        // Show Lessons 
        div.addEventListener('click',function() {
            holder.innerHTML = ''
            lessons[e].forEach(lesson => {
                // Create Div
                const div = document.createElement('div');
                div.className = 'box';
                // Create H4
                const h4 = document.createElement('h4');
                h4.textContent = lesson;
                // Append H4 to Div
                div.appendChild(h4);
                // Craete Show Content Button
                const contentBtn = document.createElement('button');
                contentBtn.className = 'content-btn';
                contentBtn.innerHTML = ' المحتوي';
                contentBtn.addEventListener('click',function() {
                    holder.innerHTML = '';
                    showContentof(lesson);
                })
                // Create Show Excersice Button  
                const excersiceBtn = document.createElement('button');
                excersiceBtn.className = 'excercise-btn';
                excersiceBtn.innerHTML = ' الإمتحان';
                excersiceBtn.addEventListener('click',function() {
                    holder.innerHTML = '';
                    showExcersiceOf(lesson);
                })
                // Append Btns To The Div
                div.append(contentBtn);
                div.append(excersiceBtn);
                // Append Div To The Holder
                holder.appendChild(div);
            })
        })
    });
}




// Content Function
function showContentof(lesson) {
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content-step'
    contentDiv.innerHTML = content[lesson];
    holder.appendChild(contentDiv)
}

// Excersice Function
function showExcersiceOf(lesson) {

            // Create Degree List 
            const name = prompt('ما هو اسمك؟');

            // Create Result Div
            const resultDiv = document.createElement('div');
            resultDiv.className = "result";
            
            // Create Title
            const title = document.createElement("H3");
            title.innerText = `درجة امتحانك يا ${name}`;
            resultDiv.appendChild(title);
        
            // Create Span Degree
            const spanDegree = document.createElement('span');
            // spanDegree.innerHTML = `${personDegree} / ${excersices[lesson].length}`;
            resultDiv.appendChild(spanDegree);
        
            // Create Close Button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = 'Close';
            closeBtn.addEventListener('click',function () {
                resultDiv.remove();
            })
            resultDiv.appendChild(closeBtn);
    
            // Create Degree's List
            const degreeDiv = document.createElement('div');
            degreeDiv.className = 'degree-div';
            resultDiv.appendChild(degreeDiv);

    // If The Lesson Have Excersice
    if (excersices[lesson.trim()] != undefined) {
        // Set The Degree
        let personDegree = 0;

        // Create Excersice Div
        const excersiceDiv = document.createElement('div');
        excersiceDiv.className = 'excersice-step';
        
        // Create Title OF The Step
        const h2 = document.createElement('h2');
        h2.innerHTML =  'امتحان ' + lesson;

        excersiceDiv.appendChild(h2);

        // Loop On All Questions
        excersices[lesson.trim()].forEach((test,testIndex) => {
            
            
            // Create Test Div
            const testDiv = document.createElement('div');
            testDiv.className = 'test';

            // Create Question E
            const h3 = document.createElement('h3');
            h3.innerHTML = test.Question;
            testDiv.appendChild(h3);
            const degreeP = document.createElement('p');
            degreeP.innerHTML = `${test.Question} <span>=></span> ${test.correctAnswer}`;
            degreeP.className = 'false';
            degreeDiv.appendChild(degreeP);

            // Create Answers Div
            const answersDiv = document.createElement('div');
            answersDiv.className = 'answersDiv';
            // Loop On Each Answer And Add Radio Buttons
            test.answers.forEach(answer => {

                const answerDiv = document.createElement('div');


                const answerInput = document.createElement('input');
                answerInput.value = answer;
                answerInput.id = answer + testIndex;
                answerInput.type = 'radio';
                answerInput.name = 'answer-' + testIndex;

                answerInput.addEventListener('input',()=> {
                    let correctAnswer = test.correctAnswer
                    if (answerInput.value == correctAnswer) {
                            personDegree++
                            degreeP.classList.remove('false');
                            degreeP.classList.toggle('true');
                    } else {
                        if (personDegree != 0) {
                            personDegree--
                            degreeP.classList.add('false');
                        }
                    }
                })


                // Create Label
                const label = document.createElement('label');
                label.innerHTML = answer;
                label.setAttribute('for',answer + testIndex);

                answerDiv.appendChild(answerInput);
                answerDiv.appendChild(label);

                answersDiv.appendChild(answerDiv);
            })

            // Append Answers Div To The Test Div
            testDiv.appendChild(answersDiv);


            // Append Test Div TO Excersice Div
            excersiceDiv.appendChild(testDiv);
        })


        // Create Check Button
        const checkButton = document.createElement('button');
        checkButton.innerHTML = 'Check';
        checkButton.className = 'check-btn'
        checkButton.addEventListener('click',function() {
            // Show Result Div
            // spanDegree.innerHTML = `${personDegree} / ${excersices[lesson].length}`;
            document.body.appendChild(resultDiv);
        })
        excersiceDiv.appendChild(checkButton);

        holder.appendChild(excersiceDiv);

        

        







    } else {
        const p = document.createElement('p');
        p.innerHTML = `This Lesson "${lesson}" <br> Don't Have Excersice`;
        holder.appendChild(p);
    }
}



    createUnitsDivs();


})

