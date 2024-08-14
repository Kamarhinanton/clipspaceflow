import Head from 'next/head'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import ArrowButton from '@/ui/ArrowButton/ArrowButton'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Clipspace flow</title>
      </Head>
      <main>
        <Container>
          <div className={classNames('editor-content', 'wrapper-class')}>
            <ArrowButton />
            <h1>TERMS OF SERVICE</h1>
            <p>
              <strong>Clipspace Terms and Conditions</strong>
            </p>
            <p>
              <strong>1. Acceptance of Terms</strong>
            </p>
            <p>
              By using our Site, you confirm that you are at least 18 years old
              or the legal age of majority in your jurisdiction, and that you
              have read, understood, and agree to these Terms.
            </p>
            <p>
              <strong>2. Use of the Site</strong>
            </p>
            <p>
              You agree to use our Site in accordance with all applicable laws
              and regulations. You are prohibited from using the Site to engage
              in any illegal activity, infringe on the rights of others, or
              disrupt the Site&apos;s operation.
            </p>
            <p>
              <strong>3. Intellectual Property Rights</strong>
            </p>
            <p>
              All content on our Site, including but not limited to text,
              graphics, logos, images, and software, is the property of
              Clipspace or its licensors and is protected by United States and
              international copyright, trademark, and other intellectual
              property laws. You may not reproduce, distribute, modify, or
              otherwise use any content from our Site without our prior written
              consent.
            </p>
            <p>
              <strong>4. User Accounts</strong>
            </p>
            <p>
              If you create an account on our Site, you are responsible for
              maintaining the confidentiality of your account information,
              including your password, and for all activities that occur under
              your account. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
            <p>
              <strong>5. User Content</strong>
            </p>
            <p>
              By submitting or posting any content on our Site, you grant us a
              non-exclusive, worldwide, royalty-free license to use, reproduce,
              modify, and distribute such content for any purpose related to the
              operation of the Site. You represent and warrant that you own or
              have the necessary rights to the content you submit.
            </p>
            <p>
              <strong>6. Third-Party Links</strong>
            </p>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the content, accuracy, or opinions expressed on
              these websites. The inclusion of any link on our Site does not
              imply our endorsement of the linked site.
            </p>
            <p>
              <strong>7. Disclaimer of Warranties</strong>
            </p>
            <p>
              Our Site is provided on an &quot;as-is&quot; and &quot;as
              available&quot; basis. We make no representations or warranties of
              any kind, express or implied, regarding the operation or
              availability of our Site or the information, content, materials,
              or products included on our Site.
            </p>
            <p>
              <strong>8. Limitation of Liability</strong>
            </p>
            <p>
              To the fullest extent permitted by law, [Website Name] and its
              affiliates, officers, directors, employees, and agents will not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from or related to your use of the Site.
            </p>
            <p>
              <strong>9. Indemnification</strong>
            </p>
            <p>
              You agree to indemnify and hold harmless [Website Name], its
              affiliates, officers, directors, employees, and agents from and
              against any claims, liabilities, damages, losses, or expenses,
              including reasonable attorneys fees, arising out of or related to
              your use of the Site or your violation of these Terms.  
            </p>
            <p>
              <strong>10. Governing Law</strong>
            </p>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of [State], without regard to its conflict of
              law principles. Any legal action or proceeding arising under these
              Terms will be brought exclusively in the federal or state courts
              located in Wilmington, DE
            </p>
            <p>
              <strong>11. Changes to These Terms</strong>
            </p>
            <p>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your continued use of the Site after any
              changes to the Terms indicates your acceptance of the new Terms.
            </p>
            <p>
              <strong>12. Termination</strong>
            </p>
            <p>
              We may terminate or suspend your access to the Site, without prior
              notice or liability, for any reason, including if you breach these
              Terms.
            </p>
            <p>
              <strong>13. Contact Information</strong>
            </p>
            <p>
              If you have any questions about these Terms, please contact us at
              hello@clipspace.co
            </p>
          </div>
        </Container>
      </main>
    </>
  )
}
