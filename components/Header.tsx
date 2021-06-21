/** @jsxImportSource theme-ui */
import Button from "components/Button"
import {paths, TEST_NET} from "lib/constants"
import publicConfig from "lib/publicConfig"
import {Link, Text, ThemeUICSSObject} from "theme-ui"

const Header = ({fund}: {fund?: boolean}) => {
  const styles: Record<string, ThemeUICSSObject> = {
    header: {
      height: [80, 120, 188],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      width: [125, 175, 250, 350],
      transition: "width 0.2s",
      display: "flex",
      alignItems: "center",
    },
    buttonDescription: {
      color: publicConfig.network === TEST_NET ? "gray.600" : "white",
      mr: 4,
      display: ["none", "none", "inline-flex"],
    },
  }
  return (
    <header sx={styles.header}>
      <Link href={paths.root} sx={styles.logo}>
        <img style={{width: "100%"}} src="/flow-faucet-logo.svg" alt="Flow" />
      </Link>

      <div>
        <Text sx={styles.buttonDescription}>
          {fund ? "Don't have an account?" : "Already have an account?"}
        </Text>
        <Button
          href={fund ? paths.fundAccount : paths.root}
          variant={publicConfig.network === TEST_NET ? "secondary" : "primary"}
        >
          {fund ? "Fund" : "Create"} Account
        </Button>
      </div>
    </header>
  )
}
export default Header
