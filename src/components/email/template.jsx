import data from "@/data/config";
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
import LOGO from "@/public/assets/cutiehackLOGO.svg";
const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-righteous">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#3a439b] p-[20px] text-white">
            <Section className="mt-[32px]">
              <Img
                src={LOGO}
                width="40"
                height="37"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-white">
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
              Visit <span className="text-cutie-magenta">{data.domain} </span>
              for more information about
              <span className="text-cutie-magenta">{data.name} </span> and
              follow us on{" "}
              <span className="text-cutie-magenta">{data.instagram} </span> and{" "}
              <span className="text-cutie-magenta">{data.domain} </span>for up
              to date information and announcements.
            </Text>

            <Text className="text-xs leading-[24px] text-cutie-gray">
              This invitation was intended for{" "}
              <span className="font-semibold text-white">{name}</span>. If you
              were not expecting this email, you can ignore this email. If you
              are concerned about your account&apos;s safety, please contact{" "}
              {data.email} to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
