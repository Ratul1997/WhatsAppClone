import firestore from '@react-native-firebase/firestore';

export const userActions = {
  sendMessages,
  getMessages,
};
async function sendMessages(msg, userId, time, isSeen) {
  try {
    await firestore()
      .collection('Chat')
      .doc('123')
      .collection('Chat')
      .add({
        msg: msg,
        userId: userId,
        time: time,
        seen: isSeen,
      });
    return {};
  } catch (error) {
    return {error};
  }
}

async function getMessages() {
  try {
    const data = await firestore()
      .collection('Chat')
      .doc('123')
      .collection('Chat')
      .get();
    console.log(data._docs);
  } catch (error) {}
}
