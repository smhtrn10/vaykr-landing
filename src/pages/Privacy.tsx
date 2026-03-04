import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground font-body text-sm mb-10">Last updated: March 05, 2026</p>

        {/* Intro */}
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
          <p>
            This privacy notice for <strong className="text-foreground">Vaykr</strong> ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you download and use our mobile application (Vaykr: Road Ready &amp; Booker), or engage with us in other related ways, including any sales, marketing, or events.
          </p>
          <p>
            <strong className="text-foreground">Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
            <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">
              support@vaykr.qzz.io
            </a>.
          </p>
        </div>

        {/* Summary Box */}
        <div className="border-l-4 border-primary bg-muted/40 rounded-r-xl px-6 py-5 mb-10 space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
          <p className="font-heading text-base font-semibold text-foreground">Summary of Key Points</p>
          <p><strong className="text-foreground">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
          <p><strong className="text-foreground">Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
          <p><strong className="text-foreground">Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
          <p><strong className="text-foreground">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</p>
          <p><strong className="text-foreground">In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
          <p><strong className="text-foreground">How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</p>
          <p><strong className="text-foreground">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
          <p><strong className="text-foreground">How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
        </div>

        {/* TOC */}
        <div className="border border-border rounded-xl px-6 py-5 mb-12 font-body text-sm">
          <p className="font-heading font-semibold text-foreground mb-3">Table of Contents</p>
          <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
            {[
              "What Information Do We Collect?",
              "How Do We Process Your Information?",
              "What Legal Bases Do We Rely On To Process Your Personal Information?",
              "When And With Whom Do We Share Your Personal Information?",
              "Do We Use Cookies And Other Tracking Technologies?",
              "How Long Do We Keep Your Information?",
              "How Do We Keep Your Information Safe?",
              "Do We Collect Information From Minors?",
              "What Are Your Privacy Rights?",
              "Controls For Do-Not-Track Features",
              "Do United States Residents Have Specific Privacy Rights?",
              "Do We Make Updates To This Notice?",
              "How Can You Contact Us About This Notice?",
              "How Can You Review, Update, Or Delete The Data We Collect From You?",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-muted-foreground font-body leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">1. What Information Do We Collect?</h2>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Personal information you disclose to us</h3>
            <p className="italic text-sm mb-3">In Short: We collect personal information that you provide to us.</p>
            <p className="mb-3">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p className="mb-2"><strong className="text-foreground">Personal Information Provided by You</strong> may include:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {["names", "phone numbers", "email addresses", "mailing addresses", "usernames", "passwords", "billing addresses", "debit/credit card numbers"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mb-2"><strong className="text-foreground">Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong className="text-foreground">Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's microphone, camera, sensors, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
              <li><strong className="text-foreground">Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server).</li>
              <li><strong className="text-foreground">Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
            </ul>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Information automatically collected</h3>
            <p className="italic text-sm mb-3">In Short: Some information — such as your IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
            <p className="mb-3">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Log and Usage Data.</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services, including your IP address, device information, browser type, and information about your activity in the Services.</li>
              <li><strong className="text-foreground">Device Data.</strong> Information about your computer, phone, tablet, or other device you use to access the Services, including your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">2. How Do We Process Your Information?</h2>
            <p className="italic text-sm mb-3">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
            <ul className="list-disc list-inside space-y-2">
              {[
                ["To facilitate account creation and authentication", "We may process your information so you can create and log in to your account, as well as keep your account in working order."],
                ["To respond to user inquiries/offer support", "We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service."],
                ["To send administrative information to you", "We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information."],
                ["To enable user-to-user communications", "We may process your information if you choose to use any of our offerings that allow for communication with another user."],
                ["To request feedback", "We may process your information when necessary to request feedback and to contact you about your use of our Services."],
                ["To send you marketing and promotional communications", "We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time."],
                ["To protect our Services", "We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention."],
                ["To evaluate and improve our Services", "We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience."],
                ["To identify usage trends", "We may process information about how you use our Services to better understand how they are being used so we can improve them."],
                ["To comply with our legal obligations", "We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights."],
              ].map(([title, desc]) => (
                <li key={title}><strong className="text-foreground">{title}.</strong> {desc}</li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">3. What Legal Bases Do We Rely On To Process Your Information?</h2>
            <p className="italic text-sm mb-3">In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</p>
            <p className="mb-3">If you are located in Canada, this section applies to you. We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
            <p className="mb-2">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including:</p>
            <ul className="list-disc list-inside space-y-1">
              {[
                "If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way",
                "For investigations and fraud detection and prevention",
                "For business transactions provided certain conditions are met",
                "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim",
                "For identifying injured, ill, or deceased persons and communicating with next of kin",
                "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse",
                "If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records",
                "If the collection is solely for journalistic, artistic, or literary purposes",
                "If the information is publicly available and is specified by the regulations",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">4. When And With Whom Do We Share Your Personal Information?</h2>
            <p className="italic text-sm mb-3">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
            <ul className="list-disc list-inside">
              <li><strong className="text-foreground">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">5. Do We Use Cookies And Other Tracking Technologies?</h2>
            <p className="italic text-sm mb-3">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
            <p className="mb-3">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
            <p className="mb-3">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising. To the extent these online tracking technologies are deemed to be a "sale"/"sharing" under applicable US state laws, you can opt out by submitting a request as described in section 11 below.</p>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Google Analytics</h3>
            <p>We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2 hover:opacity-80">
                https://tools.google.com/dlpage/gaoptout
              </a>.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">6. How Long Do We Keep Your Information?</h2>
            <p className="italic text-sm mb-3">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            <p className="mb-3">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or securely store your personal information and isolate it from any further processing until deletion is possible.</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">7. How Do We Keep Your Information Safe?</h2>
            <p className="italic text-sm mb-3">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">8. Do We Collect Information From Minors?</h2>
            <p className="italic text-sm mb-3">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
            <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If you become aware of any data we may have collected from children under age 18, please contact us at{" "}
              <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">support@vaykr.qzz.io</a>.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">9. What Are Your Privacy Rights?</h2>
            <p className="italic text-sm mb-3">In Short: Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.</p>
            <p className="mb-3">In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.</p>
            <p className="mb-3"><strong className="text-foreground">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details provided in section 13 below.</p>
            <p className="mb-3"><strong className="text-foreground">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided below.</p>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Account Information</h3>
            <p className="mb-3">If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account, or contact us using the contact information provided.</p>
            <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">10. Controls For Do-Not-Track Features</h2>
            <p className="mb-3">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
            <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">11. Do United States Residents Have Specific Privacy Rights?</h2>
            <p className="italic text-sm mb-4">In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you.</p>

            <h3 className="font-heading text-base font-semibold text-foreground mb-3">Categories of Personal Information We Collect</h3>
            <p className="mb-3">We have collected the following categories of personal information in the past twelve (12) months:</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted text-foreground">
                    <th className="text-left px-4 py-2 font-semibold border border-border">Category</th>
                    <th className="text-left px-4 py-2 font-semibold border border-border">Examples</th>
                    <th className="text-left px-4 py-2 font-semibold border border-border">Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A. Identifiers", "Contact details, name, alias, postal address, telephone, IP address, email, account name", "NO"],
                    ["B. Personal information (CA Customer Records)", "Name, contact information, education, employment, financial information", "NO"],
                    ["C. Protected classification characteristics", "Gender, age, date of birth, race, ethnicity, national origin, marital status", "NO"],
                    ["D. Commercial information", "Transaction information, purchase history, financial details, payment information", "NO"],
                    ["E. Biometric information", "Fingerprints and voiceprints", "NO"],
                    ["F. Internet or network activity", "Browsing history, search history, online behavior, interest data", "NO"],
                    ["G. Geolocation data", "Device location", "NO"],
                    ["H. Audio, electronic, sensory information", "Images and audio, video or call recordings", "NO"],
                    ["I. Professional or employment-related information", "Business contact details, job title, work history, professional qualifications", "NO"],
                    ["J. Education information", "Student records and directory information", "NO"],
                    ["K. Inferences from collected personal information", "Inferences drawn to create a profile or summary about an individual's preferences and characteristics", "NO"],
                    ["L. Sensitive personal information", "We only collect sensitive personal information as defined by applicable privacy laws or with your consent.", ""],
                  ].map(([cat, ex, col]) => (
                    <tr key={cat} className="border-b border-border">
                      <td className="px-4 py-2 border border-border font-medium text-foreground align-top">{cat}</td>
                      <td className="px-4 py-2 border border-border align-top">{ex}</td>
                      <td className="px-4 py-2 border border-border align-top">
                        {col === "NO" && (
                          <span className="inline-block bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">NO</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Your Rights</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {[
                "Right to know whether or not we are processing your personal data",
                "Right to access your personal data",
                "Right to correct inaccuracies in your personal data",
                "Right to request the deletion of your personal data",
                "Right to obtain a copy of the personal data you previously shared with us",
                "Right to non-discrimination for exercising your rights",
                "Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling",
              ].map((r) => <li key={r}>{r}</li>)}
            </ul>

            <h3 className="font-heading text-base font-semibold text-foreground mb-2">How to Exercise Your Rights</h3>
            <p className="mb-4">To exercise these rights, you can contact us by emailing us at{" "}
              <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">support@vaykr.qzz.io</a>.
            </p>

            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Appeals</h3>
            <p className="mb-4">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at{" "}
              <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">support@vaykr.qzz.io</a>. If your appeal is denied, you may submit a complaint to your state attorney general.
            </p>

            <h3 className="font-heading text-base font-semibold text-foreground mb-2">California "Shine The Light" Law</h3>
            <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in section 13 below.</p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">12. Do We Make Updates To This Notice?</h2>
            <p className="italic text-sm mb-3">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this privacy notice. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">13. How Can You Contact Us About This Notice?</h2>
            <p className="mb-3">If you have questions or comments about this notice, you may email us at{" "}
              <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">support@vaykr.qzz.io</a>{" "}or contact us by post at:
            </p>
            <address className="not-italic leading-7">
              <strong className="text-foreground">Vaykr</strong><br />
              532 Natoma Street<br />
              San Francisco, CA 94103<br />
              United States
            </address>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">14. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
            <p className="mb-3">You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please submit a data subject access request.</p>
            <p>
              <strong className="text-foreground">Contact:</strong>{" "}
              <a href="mailto:support@vaykr.qzz.io" className="text-foreground underline underline-offset-2 hover:opacity-80">support@vaykr.qzz.io</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;