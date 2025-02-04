import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MAX_IMAGE_WIDTH = SCREEN_WIDTH * 0.7; // 70% da largura da tela

export const stylesChat = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: Platform.OS === "ios" ? 60 : 10,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  messagesList: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  messageContainer: {
    maxWidth: "80%",
    marginVertical: 8,
    position: "relative",
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sentMessage: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  timeText: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 4,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 24,
    fontSize: 16,
    maxHeight: 120,
  },
  sendButton: {
    padding: 12,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  imagePreviewContainer: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
  },
  removeImageButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 16,
    padding: 4,
  },
  imageButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  ImagesChat: {
    marginBottom: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: MAX_IMAGE_WIDTH,
    height: MAX_IMAGE_WIDTH * 0.75,
    borderRadius: 12,
    marginBottom: 4,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallImage: {
    width: MAX_IMAGE_WIDTH / 2 - 2,
    height: (MAX_IMAGE_WIDTH / 2 - 2) * 0.75,
    borderRadius: 8,
    margin: 1,
  },
})
