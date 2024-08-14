import Head from 'next/head'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import ArrowButton from '@/ui/ArrowButton/ArrowButton'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Clipspace flow</title>
      </Head>
      <main>
        <Container>
          <div className={classNames('editor-content', 'wrapper-class')}>
            <ArrowButton />
            <h1>PRIVACY POLICY</h1>
            <p>
              <strong>PRIVACY POLICY</strong>
            </p>
            <p>Last Updated: 12 Aug 2024</p>
            <p>
              At Clipspace (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              we respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and share information when you visit our website,
              clipspace.co (&quot;Site&quot;).
            </p>
            <p>
              By using our Site, you agree to the collection and use of
              information in accordance with this Privacy Policy. If you do not
              agree with this Privacy Policy, please do not use our Site.
            </p>
            <p>
              <strong>1. Information We Collect</strong>
            </p>
            <p>
              We may collect the following types of information when you use our
              Site:
            </p>
            <ul>
              <li>
                Personal Information: Information that can be used to identify
                you, such as your name, email address, phone number, and payment
                details. You provide this information when you create an
                account, complete a transaction, or contact us.
              </li>
              <li>
                Usage Data: Information about how you interact with our Site,
                including your IP address, browser type, device type, pages
                visited, and time spent on our Site. We collect this data
                automatically through cookies and similar tracking technologies.
              </li>
              <li>
                Cookies and Tracking Technologies: We use cookies and similar
                technologies to collect information about your browsing behavior
                on our Site. You can manage your cookie preferences through your
                browser settings.
              </li>
            </ul>
            <p>
              <strong>2. How We Use Your Information</strong>
            </p>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>
                To Provide and Improve Our Services: We use your personal
                information to operate and improve the functionality of our
                Site, process transactions, and provide customer support.
              </li>
              <li>
                To Communicate with You: We may use your contact information to
                send you updates, newsletters, promotional offers, or other
                communications. You can opt-out of receiving these
                communications at any time.
              </li>
              <li>
                To Personalize Your Experience: We may use your usage data to
                tailor the content and advertisements you see on our Site.
              </li>
              <li>
                To Ensure Security: We use your information to detect and
                prevent fraud, abuse, and other harmful activities on our Site.
              </li>
            </ul>
            <p>
              <strong>3. How We Share Your Information</strong>
            </p>
            <p>
              We do not sell your personal information to third parties.
              However, we may share your information in the following
              circumstances:
            </p>
            <ul>
              <li>
                Service Providers: We may share your information with
                third-party service providers who assist us in operating our
                Site, processing payments, or providing other services.
              </li>
              <li>
                Legal Compliance: We may disclose your information if required
                by law, regulation, or legal process, or in response to a
                government request.
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                sale of assets, your information may be transferred to the new
                owner or successor entity.
              </li>
            </ul>
            <p>
              <strong>4. Your Rights and Choices</strong>
            </p>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li>
                Access and Correction: You can access and update your personal
                information by logging into your account on our Site.
              </li>
              <li>
                Deletion: You can request that we delete your personal
                information by contacting us at [Contact Information]. Please
                note that we may retain certain information as required by law
                or for legitimate business purposes.
              </li>
              <li>
                Opt-Out: You can opt-out of receiving marketing communications
                from us by following the instructions in the communication or by
                contacting us directly.
              </li>
              <li>
                Cookies: You can manage your cookie preferences through your
                browser settings.
              </li>
            </ul>
            <p>
              <strong>5. Security</strong>
            </p>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
            <p>
              <strong>6. Children&apos;s Privacy</strong>
            </p>
            <p>
              Our Site is not intended for use by individuals under the age of
              13. We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              it.
            </p>
            <p>
              <strong>7. Changes to This Privacy Policy</strong>
            </p>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated Privacy Policy on our Site and updating the
              &quot;Last Updated&quot; date.
            </p>
            <p>
              <strong>8. Contact Us</strong>
            </p>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p>
              <a target={'_blank'} href="http://clipspace.co">
                clipspace.co
              </a>
              <a target={'_blank'} href="mailto:hello@clipspace.co">
                hello@clipspace.co
              </a>
            </p>
          </div>
        </Container>
      </main>
    </>
  )
}
