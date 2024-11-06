import data from "@/data/config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  // Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-righteous">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#3a439b] p-[20px] text-white">
            <Section className="mt-[32px]">
              {/* <Img
                src="https://www.bearhack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.473367c8.webp&w=3840&q=75"
                width="120"
                height="80"
                alt="Vercel"
                className="my-0 mx-auto"
              /> */}
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal">
              Thank you for applying!
            </Heading>
            <Text className="text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            {children}
            <Text>
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea] text-white" />
            <Text>
              Visit{" "}
              <Link href={data.domain} className="text-[#FF00C0]">
                {data.domain}{" "}
              </Link>
              for more information about <strong>{data.name}</strong> and follow
              us on{" "}
              <Link href={data.instagram} className="text-[#FF00C0]">
                {" "}
                Instagram{" "}
              </Link>{" "}
              and{" "}
              <Link href={data.linkedin} className="text-[#FF00C0]">
                LinkedIn{" "}
              </Link>
              for up to date information and announcements.
            </Text>

            <Text className="text-xs leading-[24px] text-cutie-gray">
              This invitation was intended for{" "}
              <span className="font-semibold text-white">{name}</span>. If you
              were not expecting this email, you can ignore this email. If you
              are concerned about your account&apos;s safety, please contact{" "}
              <Link href={`mailto:${data.email}`} className="text-[#FF00C0]">
                {" "}
                {data.email}{" "}
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
