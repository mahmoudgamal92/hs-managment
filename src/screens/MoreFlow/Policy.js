import React, { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    Feather,
} from "@expo/vector-icons";


export default function About({ route, navigation }) {

    return (
        <View style={{
            paddingTop: 35,
        }}>
            <StatusBar barStyle="default" backgroundColor="#34ace0" />
            <View
                style={{
                    width: "100%",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#34ace0"
                }}>
                <Text style={{ fontFamily: "Bold", color: "#FFF", fontSize: 20 }}>
                    السياسات و الخصوصية
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <ScrollView>

                    <Text style={{
                        fontFamily: "Bold",
                        marginTop: 50,
                        paddingHorizontal: 10
                    }}>
                        Maeytham Abdulqader built the ALHAJZ ALSAREA app as a Free app. This SERVICE is provided by Maeytham Abdulqader at no cost and is intended for use as is.
                        This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                        If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at ALHAJZ ALSAREA unless otherwise defined in this Privacy Policy.
                        قام ميثم عبد القادر ببناء تطبيق الحاج السريع كتطبيق مجاني. هذه الخدمة مقدمة من ميثم عبد القادر بدون أي تكلفة وهي مخصصة للاستخدام كما هي.
                        تُستخدم هذه الصفحة لإبلاغ الزائرين فيما يتعلق بسياساتي فيما يتعلق بجمع المعلومات الشخصية واستخدامها والكشف عنها إذا قرر أي شخص استخدام خدمتي.
                        إذا اخترت استخدام خدمتي، فإنك توافق على جمع واستخدام المعلومات فيما يتعلق بهذه السياسة. يتم استخدام المعلومات الشخصية التي أقوم بجمعها لتوفير الخدمة وتحسينها. لن أستخدم معلوماتك أو أشاركها مع أي شخص باستثناء ما هو موضح في سياسة الخصوصية هذه.
                        المصطلحات المستخدمة في سياسة الخصوصية هذه لها نفس المعاني كما في الشروط والأحكام الخاصة بنا، والتي يمكن الوصول إليها في الحاج السريع ما لم يتم تحديد خلاف ذلك في سياسة الخصوصية هذه.


                        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You, including how You can delete Your Personal Data We use
                        Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        Interpretation and Definitions
                        Interpretation
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        Definitions
                        For the purposes of this Privacy Policy:
                        * Book Now you will contact the Agent of the Service.

                        * Application refers to ALHAJZ ALSARAE, the software program provided by the Company.

                        *Pay via MasterCard or ZainCash means the Agent offer the service to pay via those.
                        * Personal Data is any information that relates to an identified or identifiable individual.
                        * Service refers to the Application.
                        * Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company.
                        * Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, when you put your name and mobile number for booking to have contact with the service provider).
                        * You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        توضح سياسة الخصوصية هذه سياساتنا وإجراءاتنا بشأن جمع معلوماتك واستخدامها والكشف عنها عند استخدام الخدمة وتخبرك بحقوق الخصوصية الخاصة بك وكيف يحميك القانون، بما في ذلك كيف يمكنك حذف بياناتك الشخصية التي نستخدمها
                        بياناتك الشخصية لتوفير الخدمة وتحسينها. باستخدام الخدمة، فإنك توافق على جمع واستخدام المعلومات وفقًا لسياسة الخصوصية هذه.
                        التفسير والتعاريف
                        تفسير
                        الكلمات التي يتم كتابة الحرف الأول منها بالأحرف الكبيرة لها معاني محددة وفقًا للشروط التالية. يكون للتعريفات التالية نفس المعنى بغض النظر عما إذا كانت تظهر بصيغة المفرد أو الجمع.
                        تعريفات
                        لأغراض سياسة الخصوصية هذه:
                        *احجز الآن وسوف تتصل بوكيل الخدمة.

                        * يشير التطبيق إلى برنامج الحاج السريع المقدم من الشركة.

                        *الدفع عن طريق MasterCard أو ZainCash يعني أن الوكيل يقدم خدمة الدفع عن طريقهما.
                        * البيانات الشخصية هي أي معلومات تتعلق بفرد محدد أو يمكن التعرف عليه.
                        * الخدمة تشير إلى التطبيق.
                        * مقدم الخدمة يعني أي شخص طبيعي أو اعتباري يقوم بمعالجة البيانات نيابة عن الشركة. ويشير إلى شركات الطرف الثالث أو الأفراد العاملين لدى الشركة لتسهيل الخدمة، ولتقديم الخدمة نيابة عن الشركة.
                        * تشير بيانات الاستخدام إلى البيانات التي يتم جمعها تلقائيًا، سواء تم إنشاؤها عن طريق استخدام الخدمة أو من البنية التحتية للخدمة نفسها (على سبيل المثال، عندما تضع اسمك ورقم هاتفك المحمول للحجز للتواصل مع مزود الخدمة).
                        * أنت تعني الفرد الذي يصل إلى الخدمة أو يستخدمها، أو الشركة، أو أي كيان قانوني آخر يقوم هذا الفرد بالنيابة عنه بالوصول إلى الخدمة أو استخدامها، حسب الاقتضاء.
                        Reporting Intellectual Property Rights Violations:
                        Users are prohibited from posting any content that infringes the proprietary rights of third parties; This includes but is not limited to; Violation of intellectual property rights and trademarks (eg: advertising fictitious items for sale). We have the right to remove any content that violates the terms of our publishing policy and protect the rights of others. If you feel that one of our advertisements violates your property rights and trademark, all you have to do then is inform our customer service department, and only the owner of these rights can file a report against the terms and advertisements that may affect him.


                        الإبلاغ عن انتهاكات حقوق الملكية الفكرية: يحظر على المستخدمين نشر أي محتوى فيه انتهاك لحقوق الملكية الخاصة بالأطراف الثالثة؛ وهذا يشمل وليس على سبيل الحصر؛ انتهاك حقوق الملكية الفكرية والعلامات التجارية (مثل: الإعلان عن مواد وهمية للبيع). ولدينا الحق في إزالة أي محتوى مخالف لشروط سياسة النشر لدينا وحماية حقوق الآخرين. وفي حال شعرت بأن أحد الإعلانات لدينا تنتهك حقوق الملكية والعلامة التجارية الخاصة بك، كل ما عليك فعله حينها هو إبلاغ قسم خدمة العملاء لدينا، وصاحب هذه الحقوق هو فقط من يستطيع أن يقدم بلاغ ضد الشروط والإعلانات التي من المحتمل أنها تمسه.
                        Disclaimers and Limitations of Liability: The Quick Booking Application services are provided as is or as available, and as a user you agree not to hold the site liable for any content posted by other users, including but not limited to: advertisements or direct messages between users. The site also does not guarantee the accuracy of the advertisements or existing means of communication, the extent of safety, or even compliance with the laws therein, because most of what is published on the site is by users.
                        التنازلات وحدود المسؤولية: يتم تقديم خدمات تطبيق الحجز السريع  كما هي موجودة أو كما هي متاحة، وكمستخدم فأنت توافق على عدم تحميل الموقع مسؤولية عن أي محتوى ينشره المستخدمون الآخرون بما في ذلك على سبيل المثال لا الحصر: الإعلانات أو الرسائل المباشرة بين المستخدمين. كما أن الموقع لا يضمن دقة الإعلانات أو وسائل الإتصال الموجودة أو مدى الآمان أو حتى الإلتزام بالقوانين فيها، لأن معظم ما يتم نشره على الموقع يكون من قبل المستخدمين

                        The site also does not guarantee the accuracy of the advertisements or existing means of communication or the extent of safety or even compliance with the laws therein, because most of what is published on the site is by users, in addition to not guaranteeing continuous access to the services, and there is no immediate alert system about the services and this beyond our control; Including postponement or delay due to your geographical location or internet connection.
                        According to the permissible legal limit, we disclaim any responsibility for any express or implied guarantees, statements, and conditions that include quality, merchantability, nature of commercial circulation, durability, and suitability for the purpose for which it was manufactured. We are not responsible for any loss of money (including profit), goodwill, or any special or indirect damages resulting from your use of the site, even if we have been informed of this or if we expected such a thing to happen. Also, some jurisdictions do not allow the disclaimer of warranties or the exclusion of damages, so such disclaimers and exclusions may not apply to you.



                        *Despite all of this, if we find ourselves responsible towards you or towards any third party (whether in the concluded contract or any other methods), our liability is limited and limited to the most between (a) the total of what was paid through you for our services paid directly to your account on the site within the 3-month period preceding the act giving rise to the liability, or (b) US$20.

                        *وبالرغم من هذا كله، إذا وجدنا أنفسنا مسؤولين تجاهك او تجاه أي طرف ثالث (سواء في العقد المبرم أو أي طرق أخرى)، فإن مسؤوليتنا محدودة وتقتصر على الأكثر بين (أ) مجموع ما تم دفعه من خلالك لخدماتنا المدفوعة لصالح حسابك على الموقع مباشرة خلال فترة 3 أشهر التي تسبق الفعل المسبب للمسؤولية، أو (ب) 20 دولار أمريكي.

                        Children’s Privacy
                        These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.
                        خصوصية الأطفال

                        هذه الخدمات لا تستهدف أي شخص يقل عمره عن 13 عامًا. ولا أقوم عن قصد بجمع معلومات تعريف شخصية من الأطفال الذين تقل أعمارهم عن 13 عامًا. في حالة اكتشافي أن طفلًا أقل من 13 عامًا قد زودني بمعلومات شخصية، أقوم بحذف هذه المعلومات على الفور من خوادمنا. إذا كنت أحد الوالدين أو الوصي وكنت على علم بأن طفلك قد زودنا بمعلومات شخصية، فيرجى الاتصال بي حتى أتمكن من اتخاذ الإجراءات اللازمة.

                        Changes to This Privacy Policy
                        I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
                        This policy is effective as of 2024-03-01
                        التغييرات في سياسة الخصوصية هذه

                        يجوز لي تحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. لذا ننصحك بمراجعة هذه الصفحة بشكل دوري لمعرفة أي تغييرات. وسوف أعلمك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.

                        تسري هذه السياسة اعتبارًا من 2024-06-01
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}