import { colors } from "@/constants/theme/colors";
import { spacing } from "@/constants/theme/spacing";
import AboutScreen from "@/screens/AboutScreen";
import { ScrollView, StyleSheet } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutScreen />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
});
