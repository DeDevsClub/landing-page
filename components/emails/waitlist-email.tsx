import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WaitlistConfirmationEmailProps {
  email: string;
}

const logoUrl = "https://dedevs.club/logo.png";

export const WaitlistConfirmationEmail = ({ email }: WaitlistConfirmationEmailProps) => {
  const previewText = `Welcome to the DeDevs Club Waitlist!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={logoUrl}
                width="40"
                height="37"
                alt="DeDevs Club"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to the <strong>DeDevs Club</strong> Waitlist!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hi there,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thanks for joining the waitlist for <strong>DeDevs Club</strong>. We're excited to have you!
              
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Your email ({email}) has been successfully added. We'll reach out as soon as we have updates or are ready to launch.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email was intended for <span className="text-black">{email}</span>.
              If you received this in error, please disregard it.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistConfirmationEmail;