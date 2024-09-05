
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'CompanyName',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        role: "SDE",
        location: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        role: "SDE",
        location: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        role: "SDE",
        location: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
];


const Jobs = () => {
  return (
    <div>
      <>
      <h1>Jobs desciption from api calls</h1>
      <Table columns={columns} dataSource={data} />;
      </>
    </div>
  )
}

export default Jobs
