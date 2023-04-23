export default function (context) {
  if(context.store.state.token === null) {
    context.redirect('/admin/auth')
  }
}
