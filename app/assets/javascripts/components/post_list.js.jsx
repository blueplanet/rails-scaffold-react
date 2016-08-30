var PostList = React.createClass({
  render: function() {
    var postItems = this.props.posts.map(function(post) {
      return (
        <PostItem post={post} key={post.id} />
      );
    });

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {postItems}
        </tbody>
      </table>
    );
  }
});


var PostItem = React.createClass({
  render: function(post) {
    return (
      <tr>
        <td>{this.props.post.title}</td>
        <td>{this.props.post.body}</td>
        <td>
          <a href={'/posts/' + this.props.post.id.toString()}>Show</a>&nbsp;|&nbsp;
          <a href={'/posts/' + this.props.post.id.toString() + '/edit'}>Edit</a>&nbsp;|&nbsp;
          <a href='#'>Destroy</a>
        </td>
      </tr>
    );
  }
});
