import data from "@/data/config";
import Template from "./template";
import { Button, Section, Text, Link } from "@react-email/components";

const Acceptance = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text className="text-white">
        🎉 Congratulations 🎉 You have been accepted into {data.name} as a{" "}
        <strong>{position}</strong>
      </Text>
      <Text>
        We will be using Discord as our primary communication platform regarding
        announcements, events, workshops, activities, and more!
      </Text>
      <Section className="text-center">
        <Button
          href={data.discord}
          className="rounded bg-[#7289da] px-5 py-3 text-center text-xs font-semibold text-white no-underline"
        >
          Join Discord
        </Button>
      </Section>
      <Text className="text-white">
        We{"'"}d also like to thank <strong>Wolgram</strong> for sponoring us by
        giving complimentary access to their development platform and the
        WolframAlpha API for six months, just click
        <Link
          href={"https://account.wolfram.com/redeem/qzRiversideCutieHack1124"}
          className="text-[#FF00C0]"
        >
          {" "}
          here{" "}
        </Link>
      </Text>
      <Text className="text-xs leading-[24px] text-[#DADADA]">
        This link will take you to a sign-in page and prompt you to log in using
        your Wolfram ID. If you don{"'"}t already have a Wolfram ID, you{"'"}ll
        be prompted to create one using an active email address. Once logged in,
        you will see in the Downloads section which platforms of the software
        you have access to, with their accompanying activation keys. Please
        download the desktop version to your machine, boot up the application
        and use the associated activation key when prompted. This will grant you
        full access for six months from your activation date.
      </Text>

      <Text>We look forward to seeing you there!</Text>
    </Template>
  );
};

export default Acceptance;
