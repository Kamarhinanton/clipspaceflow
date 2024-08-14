import Head from 'next/head'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import ArrowButton from '@/ui/ArrowButton/ArrowButton'

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Clipspace flow</title>
      </Head>
      <main>
        <Container>
          <div className={classNames('editor-content', 'wrapper-class')}>
            <ArrowButton />
            <h1>COOKIE POLICY</h1>
            <p>
              <strong>Cookie Policy</strong>
            </p>
            <p>Last Updated: 12 Aug 2024</p>
            <p>
              At Clipspace (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              we use cookies and similar tracking technologies to enhance your
              experience on our website, clipspace.co (&quot;Site&quot;). This
              Cookie Policy explains what cookies are, how we use them, and your
              choices regarding their use.
            </p>
            <p>
              By using our Site, you consent to the use of cookies in accordance
              with this Cookie Policy. If you do not agree with our use of
              cookies, please disable them following the instructions in this
              policy or refrain from using our Site.
            </p>
            <p>
              <strong>1. What Are Cookies?</strong>
            </p>
            <p>
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              help the website recognize your device and remember certain
              information about your visit, such as your preferences or login
              status.
            </p>
            <p>
              <strong>2. How We Use Cookies</strong>
            </p>
            <p>We use the following types of cookies on our Site:</p>
            <ul>
              <li>
                Essential Cookies: These cookies are necessary for the basic
                functionality of our Site, such as enabling you to log in to
                secure areas and process transactions. Without these cookies,
                certain services may not be available.
              </li>
              <li>
                Performance Cookies: These cookies collect information about how
                you use our Site, such as which pages you visit and any errors
                you encounter. We use this information to improve the
                performance and user experience of our Site.
              </li>
              <li>
                Functional Cookies: These cookies allow our Site to remember
                your preferences and provide enhanced features, such as
                remembering your language settings or display preferences.
              </li>
              <li>
                Targeting/Advertising Cookies: These cookies are used to deliver
                relevant advertisements to you based on your interests. They
                also help us measure the effectiveness of our advertising
                campaigns. These cookies may be set by us or by third-party
                providers, such as advertising networks.
              </li>
              <li>
                Analytics Cookies: We use analytics cookies to collect
                information about how visitors use our Site. This helps us
                understand how our Site is being used and allows us to improve
                its performance. We use tools like Google Analytics to analyze
                this data.
              </li>
            </ul>
            <p>
              <strong>3. Third-Party Cookies</strong>
            </p>
            <p>
              In addition to our own cookies, we may use third-party cookies
              from service providers, such as Google Analytics, to help us
              analyze website traffic and user behavior. These third parties may
              also use cookies to serve advertisements to you based on your
              browsing activities.
            </p>
            <p>
              <strong>4. Your Choices Regarding Cookies</strong>
            </p>
            <p>You have several options for managing cookies:</p>
            <ul>
              <li>
                Browser Settings: Most web browsers allow you to control cookies
                through their settings. You can choose to block or delete
                cookies, or to receive a notification when a cookie is being
                set. However, please note that disabling cookies may affect the
                functionality of our Site and your ability to use certain
                features.
              </li>
              <li>
                Opt-Out Tools: Some third-party services, such as Google
                Analytics, provide opt-out tools that allow you to prevent your
                data from being used for analytics purposes. You can learn more
                about these tools on their respective websites.
              </li>
              <li>
                Do Not Track (DNT): Our Site does not currently respond to DNT
                signals from browsers. If you enable DNT in your browser, we
                will continue to collect information as described in this Cookie
                Policy.
              </li>
            </ul>
            <p>
              <strong>5. Changes to This Cookie Policy</strong>
            </p>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated Cookie Policy on our Site and updating the
              &quot;Last Updated&quot; date.
            </p>
            <p>
              <strong>6. Contact Us</strong>
            </p>
            <p>
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us at:
            </p>
            <p>Clipspace</p>
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
